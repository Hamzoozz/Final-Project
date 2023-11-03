// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiNI4Xk6wTB846DeULRaTlO5hNb_-CSmc",
  authDomain: "prinegnfinal1.firebaseapp.com",
  projectId: "prinegnfinal1",
  storageBucket: "prinegnfinal1.appspot.com",
  messagingSenderId: "391398939827",
  appId: "1:391398939827:web:ddf4973b611076543264c6",
  measurementId: "G-R7JWW1R1S0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);