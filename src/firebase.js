import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDnXXu_Nm3XPEZFmSSK9fh5Du091mzq3Nc",
  authDomain: "linkedin-8aeef.firebaseapp.com",
  projectId: "linkedin-8aeef",
  storageBucket: "linkedin-8aeef.appspot.com",
  messagingSenderId: "707007439548",
  appId: "1:707007439548:web:9fed556d5cdf8e802566b9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export {db , auth};