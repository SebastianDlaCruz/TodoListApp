// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2LjScPUf2ERjNrAei93l8zWWOoXP_LCA",
    authDomain: "todoapp-76093.firebaseapp.com",
    projectId: "todoapp-76093",
    storageBucket: "todoapp-76093.appspot.com",
    messagingSenderId: "249213703142",
    appId: "1:249213703142:web:e2c2076af5afbcc5f83c27"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);

