import { firebase, firestore } from "gatsby-theme-firebase";
import defaultImg from "../images/default-img.png";

const storage = firebase.storage();

export const createNewUser = async (user) => {
    const profileId = Date.now().toString()
    const firestoreUserData = {
        photoURL: user.photoURL,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        createdAt: user.metadata.creationTime,
    }
    // extract relevant data out of user object
    // store user in a user collection in Firestore
    await firestore.collection("users").doc(user.uid).set(firestoreUserData, { merge: true })
        .then(function () {
            
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });
    
    // add info to profile
    await firestore.collection("profile").doc(user.uid).set({profileId: profileId}, { merge: true })
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

export const getProfileDetails = (id) => {
    return firestore.collection("profile").doc(id).get()
        .then(doc => {
            let res = doc.data()
            // get profile image      
            return storage.ref().child(`profileImages/${res.profileId}.jpg`).getDownloadURL().then(function (url) {
                res = { ...res, profileImageSrc: url }
                return res
            })
                .catch((err) => {
                    res = { ...res, profileImageSrc: defaultImg }
                    return res
                })

        })
}

export const updateProfileDetails = async (user) => {
    const firestoreUserData = {
        displayName: user.name,
        jobTitle: user.jobTitle,
        githubURL: user.githubURL,
        linkedinURL: user.linkedinURL,
        profileEmail: user.email,
        description: user.description,
        skillTags: user.skillTags
    }
    await firestore.collection("profile").doc(user.id).set(firestoreUserData, { merge: true })
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
        .where("projectId", "==", projectId)
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
    await firestore.collection("profile")
        .where("profileId", "==", profileId)
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

export const uploadProfileImage = async (id, imgBlob) => {
    const blob = await fetch(imgBlob).then(r => r.blob());
    const storageRef = firebase.storage().ref(`profileImages/${id}.jpg`);

    storageRef.put(blob).then(function () {
        // console.log('Uploaded a blob or file!');
    });
}
