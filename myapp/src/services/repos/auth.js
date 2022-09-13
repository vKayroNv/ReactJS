import { createAsyncThunk } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth, firestore } from "../firebase"
import { doc, setDoc } from "firebase/firestore";

export const registerAsync = createAsyncThunk(
  'registerAsync',
  async function({email, password}) {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {displayName: email });
      
      const newUser = doc(firestore, 'users', auth.currentUser.uid);
      
      await setDoc(newUser, 
      { 
        email: email,
        displayName: email
      });
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
    try {
      await signOut(auth);
    }
    catch (err) {
      var errMessage = err.message;
      throw new Error(errMessage);
    };
  }
)