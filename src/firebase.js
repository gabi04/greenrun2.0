// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ_LpluuW38gLza609T7tExxu2wGwKAGo",
  authDomain: "green-run-5bfc0.firebaseapp.com",
  projectId: "green-run-5bfc0",
  storageBucket: "green-run-5bfc0.appspot.com",
  messagingSenderId: "899898685549",
  appId: "1:899898685549:web:5999661878ab6ad9706764",
  measurementId: "G-K7H7YY7F71",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
