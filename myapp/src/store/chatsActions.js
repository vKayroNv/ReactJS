import { createSlice } from '@reduxjs/toolkit'

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    value: 
    [
      {
        username: "user1",
        messagesList: [
          {
            fromMe: true,
            messageText: "Hello"
          },
          {
            fromMe: false,
            messageText: "Hello"
          }
        ]
      }
    ]
  },
  reducers: {
    addChat: (state, action) => {
      const newChat = {
        username: action.payload,
        messagesList: []
      };
      state.value = [...state.value, newChat]
    },
    deleteChat: (state, action) => {
      state.value = state.value.filter((obj, index) => index !== action.payload);
    },
    addMessage: (state, action) => {
      const chatId = action.payload.index;
      const message = action.payload.message;

      state.value[chatId].messagesList = [...state.value[chatId].messagesList, message];
    }
  },
})

export const { addChat, deleteChat, addMessage } = chatsSlice.actions

export default chatsSlice.reducer