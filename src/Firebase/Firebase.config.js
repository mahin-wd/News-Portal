// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhL1kqMfnYg2tT29m0m2j4yRkz4aEggqQ",
  authDomain: "news-portal-6c7ac.firebaseapp.com",
  projectId: "news-portal-6c7ac",
  storageBucket: "news-portal-6c7ac.appspot.com",
  messagingSenderId: "184817734047",
  appId: "1:184817734047:web:af72ed08e2797db9e62daa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;