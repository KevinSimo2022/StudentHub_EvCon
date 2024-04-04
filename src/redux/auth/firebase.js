// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Import getAuth from Firebase Auth SDK

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDGNkkQgtSY-E7QYCDWWSZ8rWPwXiAiNI",
  authDomain: "studhub-74c91.firebaseapp.com",
  databaseURL: "https://studhub-74c91-default-rtdb.firebaseio.com",
  projectId: "studhub-74c91",
  storageBucket: "studhub-74c91.appspot.com",
  messagingSenderId: "26125403274",
  appId: "1:26125403274:web:c77466ba13605a0377d973",
  measurementId: "G-R38D47XDC3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
