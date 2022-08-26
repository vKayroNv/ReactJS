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
            username: "bot",
            messageText: "Hello"
          }
        ]
      },
      {
        username: "user2",
        messagesList: [
          {
            username: "user2",
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
    deleteChat:(state, action) => {
      state.value = state.value.filter((obj, index) => index !== action.payload);
    },
    addMessage:()=>{}
  },
})

export const { addChat, deleteChat, addMessage } = chatsSlice.actions

export default chatsSlice.reducer