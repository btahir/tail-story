const functions = require('firebase-functions');
const stripe = require('stripe')(functions.config().stripe.token);
const admin = require('firebase-admin');
const { user } = require('firebase-functions/lib/providers/auth');

// for firebase
admin.initializeApp();
const db = admin.firestore();

// for stripe
const addSigning = functions.config().stripe.add_sub_signing;

exports.addSubscriptionWebHook = functions.https.onRequest( ({ rawBody, headers }, response) => {
    try {
        const stripeEvent = stripe.webhooks.constructEvent(
            rawBody,
            headers['stripe-signature'],
            addSigning,
        );

        const userID = stripeEvent.data.object.client_reference_id;
        const stripe_customer_id = stripeEvent.data.object.customer;
        const stripe_subscription = stripeEvent.data.object.subscription;
        console.log("userID", userID)
        console.log("stripe_customer_id", stripe_customer_id)
        console.log("stripe_subscription", stripe_subscription)

        const userRef = db.collection('users').doc(userID);

        userRef.get().then((doc) => {
            userRef.update({
                isPaying: true,
                stripe_customer_id: stripe_customer_id,
                stripe_subscription: stripe_subscription,
            })
                .then(() => {
                    response.send("Subscription made successfully!");
                })
                .catch(function (error) {
                    console.error("Error updating: ", error);
                })
        })
    } catch (err) {
        return {
            statusCode: 400,
            body: `Webhook Error: ${err.message}`,
        }
    }
});

