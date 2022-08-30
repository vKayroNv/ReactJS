import { createSlice } from '@reduxjs/toolkit'

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
})

export const { addMessage, removeMessagesByUserId } = messagesSlice.actions

export default messagesSlice.reducer