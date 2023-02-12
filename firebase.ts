import { getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCej3zPyhmlR9MQwT-oH-zysWbH9Npn9hE",
  authDomain: "chatgpt-919ff.firebaseapp.com",
  projectId: "chatgpt-919ff",
  storageBucket: "chatgpt-919ff.appspot.com",
  messagingSenderId: "914302223737",
  appId: "1:914302223737:web:16571516ed13e0103e1ba8",
  measurementId: "G-3EYQTBGXTR"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};
