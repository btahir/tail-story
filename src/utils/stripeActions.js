import firebase from 'firebase/app';
import 'firebase/functions';

export const manageStripeSubscription = (id, url) => {
    const manageSub = firebase.functions().httpsCallable('manageSubscription')
    const postData = JSON.stringify({ id: id, url: url })
    manageSub(postData)
        .then(res => res.data.body)
        .then((link) => {
            console.log(link)
            // window.location.href = link;
        })
        .catch(function (err) {
            console.log('error', err)
        })
};
