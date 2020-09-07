import { firebase, firestore } from "gatsby-theme-firebase";

export const createNewUser = (user) => {
    const profileId = Date.now().toString()
    const firestoreUserData = {
        profileId: profileId,
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        createdAt: user.metadata.creationTime,
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
    catch (err) {
        return null
    }

}

export const getUserDetails = (id) => {
    return firestore.collection("users").doc(id).get()
        .then(doc => doc.data())
}

export const updateUserDetails = async (user) => {
    const firestoreUserData = {
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

export const addProject = async (project) => {
    await firestore.collection("projects").add({
        ...project,
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });
}

export const getUserProjects = async (id) => {
    let projects = []
    await firestore.collection("projects").where("creatorId", "==", id)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                projects.push(doc.data())
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    return projects
}

export const getAllProjects = async (id) => {
    let projects = []
    await firestore.collection("projects")
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                projects.push(doc.data())
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });

    return projects
}

export const getProjectDetail = async (projectId) => {
    let fireProject = {}
    await firestore.collection("projects")
        .where("projectId", "==", parseInt(projectId))
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                fireProject = doc.data()
                fireProject['key'] = doc.id
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return fireProject
}

export const deleteProject = (projectKey) => {
    firestore.collection("projects").doc(projectKey).delete().then(function () {
        console.log("Project successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

export const updateProjectDetails = (projectKey, title, description, github, demo, tagArray) => {
    const firestoreProjectData = {
        title: title,
        description: description,
        github: github,
        demo: demo,
        tagArray: tagArray
    }
    firestore.collection("projects").doc(projectKey).set(firestoreProjectData, { merge: true }).then(function () {

    }).catch(function (error) {
        console.error("Error updating document: ", error);
    });
}

export const getPublicUserKey = async (profileId) => {
    let docId = ''
    await firestore.collection("users")
        .where("profileId", "==", profileId.toString())
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                docId = doc.id
            });
        })
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    return docId
}
