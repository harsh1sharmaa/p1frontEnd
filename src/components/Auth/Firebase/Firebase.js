// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3AtsrZHOTcHTXflfGPjmeo1qGT__D-gA",
  authDomain: "e-cart-532e3.firebaseapp.com",
  projectId: "e-cart-532e3",
  storageBucket: "e-cart-532e3.appspot.com",
  messagingSenderId: "414493798241",
  appId: "1:414493798241:web:c3967db0d48f4bcb0e5f20",
  measurementId: "G-CVXXMC8SHD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { auth, app };
