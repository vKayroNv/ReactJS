import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { getChatsAsync } from "./chats";

const sub = (dispatch) => onSnapshot(collection(firestore, 'chats'), (obj) => {
  dispatch(getChatsAsync(obj));
})

export const subscribeAsync = createAsyncThunk(
  'subscribeAsync',
  async function(props, {dispatch}) {
    try {
      sub(dispatch);
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)