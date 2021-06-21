import firebase from "firebase/app"

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCh5J9yFK_9oHobJSHAHer-qi8CWVz6jao",
    authDomain: "letmesask.firebaseapp.com",
    databaseURL: "https://letmesask-default-rtdb.firebaseio.com",
    projectId: "letmesask",
    storageBucket: "letmesask.appspot.com",
    messagingSenderId: "534718043981",
    appId: "1:534718043981:web:7690417a695b912a984904"
};

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const database = firebase.database()