import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './usernameActions'
import chatsReducer from './chatsActions'

export default configureStore({
  reducer: {
    username: usernameReducer,
    chats: chatsReducer
  },
})