import { firestore } from "gatsby-theme-firebase";

export const createNewUser = (user) => {
    let firestoreUserData = {
        'photoURL': user.photoURL,
        'displayName': user.displayName,
        'email': user.email,
        'emailVerified': user.emailVerified,
        'createdAt': user.metadata.creationTime,
    }
    // extract relevant data out of user object
    // store user in a user collection in Firestore
    firestore.collection("users").doc(user.uid).set(firestoreUserData, { merge: true })
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });
}

export const getStripeSubscription = async (id) => {
    const plan = await firestore.collection("users").doc(id)
        .get().then(doc => doc.data().stripeSubscriptionPlan)
    return plan
}
