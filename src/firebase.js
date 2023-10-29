// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgIHewHejXXZckxPQQugEvjp6b5Bm3IcM",
  authDomain: "task-tracker-605dc.firebaseapp.com",
  projectId: "task-tracker-605dc",
  storageBucket: "task-tracker-605dc.appspot.com",
  messagingSenderId: "960375101707",
  appId: "1:960375101707:web:90e2de29886abc817b2a0e",
  measurementId: "G-883TMBMQ92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);