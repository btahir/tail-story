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
    try {
        const plan = await firestore.collection("users").doc(id)
            .get().then(doc => doc.data().stripeSubscriptionPlan)
        return plan
    }
    catch(err) {
        return null
    }

}

export const getUserDetails = (id) => {
    return firestore.collection("users").doc(id).get()
        .then(doc => doc.data())
}

export const updateUserDetails = async (user) => {
    let firestoreUserData = {
        displayName: user.name,
        jobTitle: user.jobTitle,
        githubURL: user.githubURL,
        linkedinURL: user.linkedinURL,
        profileEmail: user.email,
        description: user.description,
        skillTags: user.skillTags
    }
    await firestore.collection("users").doc(user.id).set(firestoreUserData, { merge: true })
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });
}
