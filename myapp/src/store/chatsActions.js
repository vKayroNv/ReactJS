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
  },
})

//export const { getChatsNames } = chatsSlice.actions

export default chatsSlice.reducer