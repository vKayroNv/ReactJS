import { createSlice } from '@reduxjs/toolkit'
import { addMessageThunk } from './thunks';

export const messagesSlice = createSlice({
  name: 'messages',
  initialState: {
    value: []
  },
  reducers: {
    addMessage: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    removeMessagesByUserId: (state, action) => {
      state.value = state.value.filter(obj => obj.chatId !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(addMessageThunk.fulfilled, (state, action) => {
      addMessage(action.payload);
    })
  },
})

export const { addMessage, removeMessagesByUserId } = messagesSlice.actions

export default messagesSlice.reducer