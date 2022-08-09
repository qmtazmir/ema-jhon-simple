// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp3-xI5NHMU9yycnHV1a2r6AivVsA8MZs",
  authDomain: "ema-jhon-simple-697c4.firebaseapp.com",
  projectId: "ema-jhon-simple-697c4",
  storageBucket: "ema-jhon-simple-697c4.appspot.com",
  messagingSenderId: "373783485791",
  appId: "1:373783485791:web:99e3661be4ef6473f32aea",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
