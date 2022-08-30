import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    value: 
    [
      {
        id: uuidv4(),
        username: "user1",
      }
    ]
  },
  reducers: {
    addChat: (state, action) => {
      const newChat = {
        id: uuidv4(),
        username: action.payload
      };
      state.value = [...state.value, newChat]
    },
    deleteChat: (state, action) => {
      state.value = state.value.filter((obj) => obj.id !== action.payload);
    }
  },
})

export const { addChat, deleteChat } = chatsSlice.actions

export default chatsSlice.reducer