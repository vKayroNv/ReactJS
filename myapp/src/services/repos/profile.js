import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth } from "../firebase"
import { updatePassword, updateProfile } from "firebase/auth";

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