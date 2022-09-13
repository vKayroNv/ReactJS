import { combineReducers, configureStore } from '@reduxjs/toolkit'

import profileReducer from './profileActions'
import chatsReducer from './chatsActions'
import messagesReducer from './messagesActions'
import gistsReducer from './gistsActions';
import firebaseReducer from './firebaseActions';
import subscribeReducer from './subscribeActions';

const reducers = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  gists: gistsReducer,
  firebaseApp: firebaseReducer,
  subscribe: subscribeReducer,
});

export const store = configureStore({
  reducer: reducers
});