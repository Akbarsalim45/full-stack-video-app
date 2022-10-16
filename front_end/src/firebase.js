// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.FIREBASE_API_KEY,
  authDomain: "react-video-app-85753.firebaseapp.com",
  projectId: "react-video-app-85753",
  storageBucket: "react-video-app-85753.appspot.com",
  messagingSenderId: "558948677115",
  appId: "1:558948677115:web:16bff779d78ee2371d075e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
