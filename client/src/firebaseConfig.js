import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5OuHInEesUP7N0BmPAay1bkmRqn9wyo8",
  authDomain: "revee-87f9c.firebaseapp.com",
  projectId: "revee-87f9c",
  storageBucket: "revee-87f9c.appspot.com",
  messagingSenderId: "116489224678",
  appId: "1:116489224678:web:1599000f49fdb2231a1627",
  measurementId: "G-60SL255TNM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db , signInWithEmailAndPassword, signInWithPopup};
