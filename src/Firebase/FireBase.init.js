// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsP8l7MJu4Ex38hlbpQ_GxKwqzX5-aOsc",
  authDomain: "e-commerce-demo-d63b7.firebaseapp.com",
  projectId: "e-commerce-demo-d63b7",
  storageBucket: "e-commerce-demo-d63b7.appspot.com",
  messagingSenderId: "228409985663",
  appId: "1:228409985663:web:169872c038b93a6e5e8d4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth