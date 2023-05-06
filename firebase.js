// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD34lwVDHDRPgSLLmJpwdWMOc6kKJdBXx4",
  authDomain: "aqualink-fa989.firebaseapp.com",
  databaseURL:
    "https://aqualink-fa989-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "aqualink-fa989",
  storageBucket: "aqualink-fa989.appspot.com",
  messagingSenderId: "1041192730407",
  appId: "1:1041192730407:web:ced592c4cffdc33b447302",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
