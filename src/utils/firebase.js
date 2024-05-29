// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUOjMDZBm67XaWy_fP3OxXx8DfQGquhTg",
  authDomain: "netflixgpt-8f6e0.firebaseapp.com",
  projectId: "netflixgpt-8f6e0",
  storageBucket: "netflixgpt-8f6e0.appspot.com",
  messagingSenderId: "451767633637",
  appId: "1:451767633637:web:ffa42225eea20c8f90760c",
  measurementId: "G-RQ554T0S1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//instaed of doing again and again do here i 
export const auth = getAuth();