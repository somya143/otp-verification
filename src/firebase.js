// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACb3hXlBAZH5Mj4Qj7RDmA5816bDqCUBs",
  authDomain: "otp-verification-49e05.firebaseapp.com",
  projectId: "otp-verification-49e05",
  storageBucket: "otp-verification-49e05.appspot.com",
  messagingSenderId: "703340617322",
  appId: "1:703340617322:web:ef5ba8f09650d2227fb413",
  measurementId: "G-PM7PB6M0R7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
