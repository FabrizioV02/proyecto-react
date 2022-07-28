import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSyk7QLbpdGTnqCnGHQMyx_RkoSsmIXU8",
  authDomain: "proyecto-react-fabrizio.firebaseapp.com",
  projectId: "proyecto-react-fabrizio",
  storageBucket: "proyecto-react-fabrizio.appspot.com",
  messagingSenderId: "601084920850",
  appId: "1:601084920850:web:1f8bd871fea92a11ff84cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
