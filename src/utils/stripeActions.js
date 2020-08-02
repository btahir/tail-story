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
