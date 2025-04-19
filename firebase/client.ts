import {initializeApp, getApps, getApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDou1OXsvpTq8K-eMcmYg5ejSa0VrP8lWw",
    authDomain: "prepwise-78569.firebaseapp.com",
    projectId: "prepwise-78569",
    storageBucket: "prepwise-78569.firebasestorage.app",
    messagingSenderId: "678057791314",
    appId: "1:678057791314:web:b9552eea1c67e39bfbb48b",
    measurementId: "G-CZZ68BTQM0"
};

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);