// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZUt2Y79gNhRAObUHDwcuVhh_mWuon6Xk",
  authDomain: "cat-memory-cards.firebaseapp.com",
  projectId: "cat-memory-cards",
  storageBucket: "cat-memory-cards.appspot.com",
  messagingSenderId: "114495193765",
  appId: "1:114495193765:web:e94f42862aaea98daf434c",
  measurementId: "G-C0KXN839RJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);