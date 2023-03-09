import { FirebaseOptions, getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.NEXT_PUBLIC_FIRESTORE_APIKEY,
    authDomain: process.env.NEXT_PUBLIC_FIRESTORE_AUTHDOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIRESTORE_PROJECTID,
    storageBucket: process.env.NEXT_PUBLIC_FIRESTORE_STORAGEBUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIRESTORE_MESSAGINGSENDERID,
    appId: process.env.NEXT_PUBLIC_FIRESTORE_APPID
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };