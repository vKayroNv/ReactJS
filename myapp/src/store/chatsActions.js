import { createSlice } from '@reduxjs/toolkit'
import { addChatAsync, getChatsAsync, deleteChatAsync } from '../services/repos/chats';

export const chatsSlice = createSlice({
  name: 'chats',
  initialState: {
    loading: false,
    error: null,
    chats: [],
  },
  reducers: {
  },
  extraReducers: {
    [addChatAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addChatAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [addChatAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getChatsAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getChatsAsync.fulfilled]: (state, action) => {
      state.chats = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getChatsAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [deleteChatAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [deleteChatAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [deleteChatAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
})

export const { addChat, deleteChat } = chatsSlice.actions

export default chatsSlice.reducer