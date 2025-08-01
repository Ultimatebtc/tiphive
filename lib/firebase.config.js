// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.AUTH_FIREBASE_API_KEY,
    authDomain: "tiphive-a52bd.firebaseapp.com",
    projectId: "tiphive-a52bd",
    storageBucket: "tiphive-a52bd.firebasestorage.app",
    messagingSenderId: "849852934053",
    appId: "1:849852934053:web:b3e5fe2bb7f0103737aa4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}