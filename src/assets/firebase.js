// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYBvl2VpfpcaMoBEmRZIGWObesgGzJljs",
  authDomain: "aiflix-70a77.firebaseapp.com",
  projectId: "aiflix-70a77",
  storageBucket: "aiflix-70a77.appspot.com",
  messagingSenderId: "1050607446741",
  appId: "1:1050607446741:web:b4ca4811819c8c4322905c",
  measurementId: "G-MJ5YSQCQD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)