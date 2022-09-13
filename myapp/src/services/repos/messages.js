import { createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDoc, doc, addDoc, updateDoc } from "firebase/firestore";
import { auth, firestore } from "../firebase";
import { getUserDisplayNameByUserId } from "./chats";

export const addMessageAsync = createAsyncThunk(
  'addMessageAsync',
  async function({chatId, message}) {
    try {
      const newMessage = collection(firestore, 'messages');

      var data = await addDoc(newMessage, {
        sendAt: Date.now(),
        userUid: auth.currentUser.uid, 
        message: message
      });

      const chat = await getDoc(doc(firestore, 'chats', chatId));

      await updateDoc(doc(firestore, 'chats', chatId), {
        messages: [...chat.data().messages, data.id]
      })
      
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)

export const getMessagesAsync = createAsyncThunk(
  'getMessagesAsync',
  async function(chatId) {
    try {
      const chat = await getDoc(doc(firestore, 'chats', chatId));

      const messagesIds = chat.data().messages;

      var messages = [];

      for (var i = 0; i < messagesIds.length; i++) {
        const data = (await getDoc(doc(firestore, 'messages', messagesIds[i]))).data();

        messages = [...messages, {
          sendAt: data.sendAt,
          message: data.message,
          displayName: await getUserDisplayNameByUserId(data.userUid)
        }];
      }

      return messages.sort((a, b) => a.sendAt - b.sendAt);
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)