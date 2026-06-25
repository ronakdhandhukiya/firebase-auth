
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBimuo2INDt-IFZBwbS_672-puwHFSZV0I",
  authDomain: "authentication-cbb38.firebaseapp.com",
  databaseURL: "https://authentication-cbb38-default-rtdb.firebaseio.com",
  projectId: "authentication-cbb38",
  storageBucket: "authentication-cbb38.firebasestorage.app",
  messagingSenderId: "774700522296",
  appId: "1:774700522296:web:5db9aab44a759dc380ffcd",
  databaseURL : "https://authentication-cbb38-default-rtdb.firebaseio.com"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);