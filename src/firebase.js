import firebase from 'firebase'

export const appName = 'test-environment-a7707';
export const firebaseConfig = {
    apiKey: "AIzaSyBSnHTaKqvd28k7kqw7oLBLGqe11r2YPdM",
    authDomain: `${appName}.firebaseapp.com`,
    databaseURL: `${appName}.firebaseio.com`,
    projectId: appName,
    storageBucket: `${appName}.appspot.com`,
    messagingSenderId: "206071880744"
};

firebase.initializeApp(firebaseConfig);