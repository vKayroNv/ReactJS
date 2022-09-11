import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCr4OpZLbloIKUyrF9Lf3dpvfChkIm7HXE",
  authDomain: "gb-reactjs-myapp.firebaseapp.com",
  databaseURL: "https://gb-reactjs-myapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-reactjs-myapp",
  storageBucket: "gb-reactjs-myapp.appspot.com",
  messagingSenderId: "458578088432",
  appId: "1:458578088432:web:c69e4f9d7ba11382b58d35"
};

const app = initializeApp(firebaseConfig);