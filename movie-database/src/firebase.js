// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCz6QNBczhCeNYFPkD6nb396D6cJGD_a4",
  authDomain: "mdb-app-55ae9.firebaseapp.com",
  projectId: "mdb-app-55ae9",
  storageBucket: "mdb-app-55ae9.appspot.com",
  messagingSenderId: "1092521009012",
  appId: "1:1092521009012:web:e3188e9fb3d2d87c29d621",
  measurementId: "G-SHZ5LWXFFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);