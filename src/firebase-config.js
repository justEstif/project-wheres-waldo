// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHg8_0FwwkNXm02VbEF23HrRXa8vPEweI",
  authDomain: "wheres-waldo-15d9f.firebaseapp.com",
  projectId: "wheres-waldo-15d9f",
  storageBucket: "wheres-waldo-15d9f.appspot.com",
  messagingSenderId: "262154515559",
  appId: "1:262154515559:web:b02542e02edcce5a02d0c2",
  measurementId: "G-2J9LNCEYD8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
