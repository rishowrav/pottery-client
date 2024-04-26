// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3SzV5KP_FEf9rM9s-kKk5dGqGDieBg6s",
  authDomain: "pottery-project-d0f5c.firebaseapp.com",
  projectId: "pottery-project-d0f5c",
  storageBucket: "pottery-project-d0f5c.appspot.com",
  messagingSenderId: "688699539136",
  appId: "1:688699539136:web:781bce4b7adcab6bfd7725",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
