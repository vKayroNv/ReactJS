import { createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updatePassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCr4OpZLbloIKUyrF9Lf3dpvfChkIm7HXE",
  authDomain: "gb-reactjs-myapp.firebaseapp.com",
  databaseURL: "https://gb-reactjs-myapp-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "gb-reactjs-myapp",
  storageBucket: "gb-reactjs-myapp.appspot.com",
  messagingSenderId: "458578088432",
  appId: "1:458578088432:web:c69e4f9d7ba11382b58d35"
};

export const firebaseApp = initializeApp(firebaseConfig);

export const registerAsync = createAsyncThunk(
  'registerAsync',
  async function({email, password}) {
    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      var errMessage;
      switch (err.code) {
        case 'auth/invalid-email':
          errMessage = 'Введенный email имеет неверный формат';
          break;
        case 'auth/weak-password':
          errMessage = 'Пароль должен быть больше 6 символов';
          break;
        case 'auth/email-already-in-use':
          errMessage = 'Данный email уже зарегистрирован';
          break;
        default: 
          errMessage = err.message;
          break;
      }
      throw new Error(errMessage);
    }
  }
)

export const loginAsync = createAsyncThunk(
  'loginAsync',
  async function({email, password}) {
    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      var errMessage;
      switch (err.code) {
        case 'auth/invalid-email':
          errMessage = 'Введенный email имеет неверный формат';
          break;
        case 'auth/user-not-found':
          errMessage = 'Пользователя с таким email не существует';
          break;
        case 'auth/wrong-password':
          errMessage = 'Неправильный пароль';
          break;
        default:
          errMessage = err.message;
          break;
      }
      throw new Error(errMessage);
    };
  }
)

export const logoutAsync = createAsyncThunk(
  'logoutAsync',
  async function() {
    const auth = getAuth();
    try {
      await signOut(auth);
    }
    catch (err) {
      var errMessage = err.message;
      throw new Error(errMessage);
    };
  }
)

export const changePasswordAsync = createAsyncThunk(
  'changePasswordAsync',
  async function(newPassword) {
    const auth = getAuth();
    try {
      await updatePassword(auth.currentUser, newPassword);
    }
    catch (err) {
      var errMessage;
      switch (err.code) {
        case 'auth/weak-password':
          errMessage = 'Пароль должен быть больше 6 символов';
          break;
        default:
          errMessage = err.message;
          break;
      }
      throw new Error(errMessage);
    };
  }
)