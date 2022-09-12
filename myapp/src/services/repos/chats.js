import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, firestore } from "../firebase"
import { collection, getDocs, getDoc, doc, setDoc, deleteDoc } from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';

export const addChatAsync = createAsyncThunk(
  'addChatAsync',
  async function(uid) {
    try {
      const newChat = doc(firestore, 'chats', uuidv4());

      await setDoc(newChat, {
        users: [auth.currentUser.uid, uid]
      });
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)

export const deleteChatAsync = createAsyncThunk(
  'deleteChatAsync',
  async function(chatId) {
    try {
      await deleteDoc(doc(firestore,'chats',chatId));
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
);

export const getChatsAsync = createAsyncThunk(
  'getChatsAsync',
  async function() {
    try {
      const response = await getDocs(collection(firestore, 'chats'));

      var chatIds = [];

      for (var i = 0; i < response.docs.length; i++) {
        const data = response.docs[i].data();
        if (data.users[0] === auth.currentUser.uid || data.users[1] === auth.currentUser.uid) {
          const userId = data.users.filter((userId) => userId !== auth.currentUser.uid)[0];
          const displayName = await getUserDisplayNameByUserId(userId);
          chatIds = [...chatIds, {id: response.docs[i].id, userDisplayName: displayName}];
        }
      }
      return chatIds;
    }
    catch (err) {
      throw new Error(err.message);
    }
  }
)

const getUserDisplayNameByUserId = async function(userId) {
  const user = await getDoc(doc(firestore,'users',userId));
  return user.data().displayName;
}