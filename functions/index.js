const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.token);
const admin = require('firebase-admin');

// for firebase
admin.initializeApp();

// for stripe
const updSigning = functions.config().stripe.upd_sub_signing;

exports.setupStripeCustomer = functions.firestore.document('users/{docId}')
    .onCreate(async (snap, context) => {
        // create a new customer in Stripe
        const data = snap.data();
        const customer = await stripe.customers.create({ email: data.email, metadata: {firebaseId: context.params.docId} });

        // subscribe the new customer to the free plan
        const subscription = await stripe.subscriptions.create({
            customer: customer.id,
            items: [{ price: functions.config().stripe.default_plan }],
            metadata: {firebaseId: context.params.docId}
        });
        console.log('subscription', subscription)

        const user = admin.firestore().collection('users').doc(context.params.docId)

        await user.set({
            stripeCustomerId: customer.id,
            stripeSubscriptionId: subscription.id,
            stripeSubscriptionPlan: subscription.items.data[0].plan.nickname
        }, { merge: true });

        return {
            statusCode: 200,
            body: JSON.stringify({
                app_metadata: {
                    roles: ['free'],
                },
            }),
        };
    });

exports.createStripePortal = functions.https.onCall(async (data, context) => {
    const { id } = JSON.parse(data);

    const stripeId = await admin.firestore().collection('users').doc(id)
        .get().then(doc => doc.data().stripeCustomerId);

    const link = await stripe.billingPortal.sessions.create({
        customer: stripeId,
        return_url: functions.config().stripe.return_url,
    });

    return {
        statusCode: 200,
        body: JSON.stringify(link.url),
    };
});

exports.updateSubscription = functions.https.onRequest( async ({ rawBody, headers }, response) => {
    try {
        // make sure this event was sent legitimately.
        const stripeEvent = stripe.webhooks.constructEvent(
            rawBody,
            headers['stripe-signature'],
            updSigning,
        );

        // bail if this is not a subscription update event
        if (stripeEvent.type !== 'customer.subscription.updated') return;

        const subscription = stripeEvent.data.object;

        // take the first word of the plan name and use it as the role
        const plan = subscription.items.data[0].plan.nickname;

        // update subscription plan in firestore
        const user = admin.firestore().collection('users').doc(subscription.metadata.firebaseId);

        await user.update({
            stripeSubscriptionPlan: plan
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ received: true }),
        };
    }

    catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        };
    }

})

