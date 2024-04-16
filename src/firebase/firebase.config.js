// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1gnc-Tqt-Nft_G7N1CWU0rI2_m2dxnew",
  authDomain: "griho-abhijan.firebaseapp.com",
  projectId: "griho-abhijan",
  storageBucket: "griho-abhijan.appspot.com",
  messagingSenderId: "13869109677",
  appId: "1:13869109677:web:6a56b16167271a8c005124"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;