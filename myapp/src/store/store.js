import { configureStore } from '@reduxjs/toolkit'
import usernameReducer from './usernameActions'
import chatsReducer from './chatsActions'
import answerphoneReducer from './answerphoneActions'
import messagesReducer from './messagesActions'

export default configureStore({
  reducer: {
    username: usernameReducer,
    chats: chatsReducer,
    answerphone: answerphoneReducer,
    messages: messagesReducer,
  },
})