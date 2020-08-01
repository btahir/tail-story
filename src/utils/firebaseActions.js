import { firestore } from "gatsby-theme-firebase";

export const createNewUser = (user) => {
    let firestoreUserData = {
        'photoURL': user.photoURL,
        'displayName': user.displayName,
        'email': user.email,
        'emailVerified': user.emailVerified,
        'createdAt': user.metadata.creationTime,
        'subscriptionTier': 'FREE',
    }
    // extract relevant data out of user object
    // store user in a user collection in Firestore
    firestore.collection("users").doc(user.uid).set(firestoreUserData)
        .then(function () {
            return true;            
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
    });
}
