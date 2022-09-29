// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDNkm6JLaffi3NDdrOp4SM-RBrI1G7yuNE",
    authDomain: "file-upload-b3002.firebaseapp.com",
    projectId: "file-upload-b3002",
    storageBucket: "file-upload-b3002.appspot.com",
    messagingSenderId: "44756423119",
    appId: "1:44756423119:web:2227947e88f13e940b82ba",
    measurementId: "G-ZZHRE5RLHQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
