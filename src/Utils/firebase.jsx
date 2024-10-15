// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZyoOduj0VcQqIQiCjt_z2iC4r2nC1gHs",
  authDomain: "moviegpt-1e09e.firebaseapp.com",
  projectId: "moviegpt-1e09e",
  storageBucket: "moviegpt-1e09e.appspot.com",
  messagingSenderId: "1098728530071",
  appId: "1:1098728530071:web:fb948d28c3ddc8552789d2",
  measurementId: "G-4E9EZZL7C4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);