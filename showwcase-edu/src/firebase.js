// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ByD4zjHP5QM7oxLyBI3Pzhw2QABWETw",
  authDomain: "showwcase-edu.firebaseapp.com",
  projectId: "showwcase-edu",
  storageBucket: "showwcase-edu.firebasestorage.app",
  messagingSenderId: "178310088682",
  appId: "1:178310088682:web:80fe6ac019203c55d9d493",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
