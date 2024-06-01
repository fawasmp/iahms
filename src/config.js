// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPK0-0cMz98zmXtBml4ioKBqE7dab1998",
  authDomain: "iahms-d0137.firebaseapp.com",
  projectId: "iahms-d0137",
  storageBucket: "iahms-d0137.appspot.com",
  messagingSenderId: "1059252237093",
  appId: "1:1059252237093:web:df27e9e9dd2acecf96a0cc",
  measurementId: "G-H0CJJRVMYH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
