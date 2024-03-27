// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);
export { app as firebase, firebaseConfig };