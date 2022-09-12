import { createAsyncThunk } from "@reduxjs/toolkit";
import { updatePassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../firebase"
import { updateDoc, doc } from "firebase/firestore";

export const getDisplayNameAsync = createAsyncThunk(
  "getDisplayNameAsync",
  function() {
    try {
      return { displayName: auth.currentUser.displayName, uid: auth.currentUser.uid };
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)

export const changeDisplayNameAsync = createAsyncThunk(
  "changeDisplayNameAsync",
  async function(displayName) {
    try {
      await updateProfile(auth.currentUser, {displayName: displayName });

      const user = doc(firestore, 'users', auth.currentUser.uid);

      await updateDoc(user, 
      {
        displayName: displayName
      });

      return displayName;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)

export const changePasswordAsync = createAsyncThunk(
  'changePasswordAsync',
  async function(newPassword) {
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