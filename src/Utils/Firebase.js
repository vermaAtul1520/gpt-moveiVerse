import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOcrgJWXbCi1MvE65Q1NAqrB4uh4z7QQI",
  authDomain: "netflix-gpt-26862.firebaseapp.com",
  projectId: "netflix-gpt-26862",
  storageBucket: "netflix-gpt-26862.appspot.com",
  messagingSenderId: "1004331723720",
  appId: "1:1004331723720:web:a292da850874cf0362aefd",
  measurementId: "G-MN4H75G3GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);