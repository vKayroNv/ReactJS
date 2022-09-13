import { createSlice } from '@reduxjs/toolkit'
import { addMessageAsync, getMessagesAsync } from '../services/repos/messages';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    messages: [],
    loading: false,
    error: null
  },
  reducers: {
    clearMessages: (state) => {
      state.messages = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {
    [addMessageAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [addMessageAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [addMessageAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getMessagesAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getMessagesAsync.fulfilled]: (state, action) => {
      state.messages = action.payload;
      state.loading = false;
      state.error = null;
    },
    [getMessagesAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  },
})

export const { clearMessages } = messagesSlice.actions

export default messagesSlice.reducer