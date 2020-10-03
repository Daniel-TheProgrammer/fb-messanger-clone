import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    apiKey: "AIzaSyA1YvGHS7R5olhk3TRO7NNfin4TZ-JX1sY",
    authDomain: "facebook-messanger-clone-7cc79.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-7cc79.firebaseio.com",
    projectId: "facebook-messanger-clone-7cc79",
    storageBucket: "facebook-messanger-clone-7cc79.appspot.com",
    messagingSenderId: "824248396326",
    appId: "1:824248396326:web:9a2662b87a0ce21d6d54e7",
    measurementId: "G-RMW3X3QYKJ"
});

const db = firebaseApp.firestore();

export default db;