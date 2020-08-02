// const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// export const createStripeCustomer = async (user) => {    
//     // create a new customer in Stripe
//     const customer = await stripe.customers.create({ email: user.email });
//     console.log('customer', customer)

//     await stripe.subscriptions.create({
//         customer: customer.id,
//         items: [{ price: process.env.STRIPE_DEFAULT_PRICE_PLAN }],
//         return_url: 'https://example.com/account',
//     });
// }

// import axios from 'axios';
import firebase from "firebase";

export const createStripeCustomer = (user) => {
    const setupCustomer = firebase.functions().httpsCallable('setupStripeCustomer')
    const postData = JSON.stringify({email: user.email})
    setupCustomer(postData).then(function (result) {
        // Read result of the Cloud Function.
        console.log('result', result)
    }).catch(function (err) {
        console.log('error', err)
    })    
};
