import { firebase, firestore } from "gatsby-theme-firebase";
import defaultImg from "../images/default-img.svg";
import { navigate } from "gatsby";

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
        navigate("/profile")
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
        description: user.description        
    }
    await firestore.collection("profile").doc(user.id).set(firestoreUserData, { merge: true })
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });

    // update tags without merge
    await firestore.collection("profile").doc(user.id).update({skillTags: user.skillTags})
        .then(function () {
            return true;
        })
        .catch(function (error) {
            console.error("Error writing document: ", error);
            return false;
        });        
}

const uploadProjectImage = async (imageId, imgBlob) => {
    const blob = await fetch(imgBlob).then(r => r.blob());
    const storageRef = firebase.storage().ref(`projectImages/${imageId}.jpg`);

    await storageRef.put(blob).then(function () {
        // console.log('Uploaded a blob or file!');
    }); 
    return
}

export const addProject = async (project, croppedImage) => {
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

    // add image to storage
    await uploadProjectImage(project.projectImageId, croppedImage)
    return
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

export const getAllProjects = async () => {
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

// const generateSearchTerms = (searchTerm) => {
//     const searchTermArray = searchTerm.split(' ')
//     let search1 = ''
//     let search2 = ''
//     let search3 = ''
//     let search4 = ''
//     let search5 = ''

//     if(searchTermArray.length === 1) {
//         search1 = searchTermArray[0]
//         search2 = searchTermArray[0]
//         search3 = searchTermArray[0]
//         search4 = searchTermArray[0]
//         search5 = searchTermArray[0]
//     } 
//     if(searchTermArray.length === 2) {
//         search1 = searchTermArray[0]
//         search2 = searchTermArray[1]
//         search3 = searchTermArray[0]
//         search4 = searchTermArray[0]
//         search5 = searchTermArray[0]
//     }
//     if(searchTermArray.length === 3) {
//         search1 = searchTermArray[0]
//         search2 = searchTermArray[1]
//         search3 = searchTermArray[2]
//         search4 = searchTermArray[0]
//         search5 = searchTermArray[0]
//     }
//     if(searchTermArray.length === 4) {
//         search1 = searchTermArray[0]
//         search2 = searchTermArray[1]
//         search3 = searchTermArray[2]
//         search4 = searchTermArray[3]
//         search5 = searchTermArray[0]
//     }  
//     if(searchTermArray.length === 5) {
//         search1 = searchTermArray[0]
//         search2 = searchTermArray[1]
//         search3 = searchTermArray[2]
//         search4 = searchTermArray[3]
//         search5 = searchTermArray[4]
//     }
    
//     if (search1 === '') {
//         search1 = searchTermArray[0]
//     }
//     if (search2 === '') {
//         search2 = searchTermArray[0]
//     }    
//     if (search3 === '') {
//         search3 = searchTermArray[0]
//     }
//     if (search4 === '') {
//         search4 = searchTermArray[0]
//     }
//     if (search5 === '') {
//         search5 = searchTermArray[0]
//     }

//     console.log([search1,search2,search3,search4,search5])

//     return [search1,search2,search3,search4,search5]
// }

export const getSearchedProjects = async (searchTerm) => {
    let projects = []
    // const [search1,search2,search3,search4,search5] = generateSearchTerms(searchTerm)
    const searchWord = searchTerm.toLowerCase()

    await firestore.collection("projects")        
        .where(`projectTags.${searchWord}`, "==", true)
        // .where(`projectTags.${search2}`, "==", true)
        // .where(`projectTags.${search3}`, "==", true)
        // .where(`projectTags.${search4}`, "==", true)
        // .where(`projectTags.${search5}`, "==", true)
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
    return await firestore.collection("projects")
        .where("projectId", "==", projectId)
        .get()
        .then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // doc.data() is never undefined for query doc snapshots
                fireProject = doc.data()
                fireProject['key'] = doc.id             
            })
        })
        .then(res => {
            // get project image      
            return storage.ref().child(`projectImages/${fireProject.projectImageId}.jpg`).getDownloadURL().then(function (url) {
                fireProject = { ...fireProject, projectImageSrc: url }
                return fireProject
            })
            .catch((err) => {
                // fireProject['projectImageSrc'] = defaultImg
                fireProject = { ...fireProject, projectImageSrc: defaultImg }
                return fireProject
            })   
        })       
        .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
}

export const deleteProject = (projectKey) => {
    firestore.collection("projects").doc(projectKey).delete().then(function () {
        console.log("Project successfully deleted!");
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
}

export const updateProjectDetails = async (projectKey, title, description, github, demo, projectTags, projectImageId, croppedImage) => {
    const firestoreProjectData = {
        title: title,
        description: description,
        github: github,
        demo: demo,
        projectImageId: projectImageId,        
    }
    await firestore.collection("projects").doc(projectKey).set(firestoreProjectData, { merge: true }).then(function () {

    }).catch(function (error) {
        console.error("Error updating document: ", error);
    });

    // update tags without merge
    await firestore.collection("projects").doc(projectKey).update({projectTags:projectTags}).then(function () {

    }).catch(function (error) {
        console.error("Error updating document: ", error);
    });  
    
    // add image to storage
    await uploadProjectImage(projectImageId, croppedImage)    
    return
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

export const getProjectImage = (projectImageId) => {
    return storage.ref().child(`projectImages/${projectImageId}.jpg`).getDownloadURL().then(function (url) {        
        return url
    })
    .catch((err) => {
        return defaultImg
    })     
}

