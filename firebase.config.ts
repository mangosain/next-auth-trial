// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZzFWINE9xsxCj2xlRPbqEHJ62ax06LMk",
  authDomain: "practice-36b67.firebaseapp.com",
  projectId: "practice-36b67",
  storageBucket: "practice-36b67.appspot.com",
  messagingSenderId: "260875271292",
  appId: "1:260875271292:web:ae7011f4ffb9f0e95c1df9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Set up Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
