import { createSlice } from '@reduxjs/toolkit'

export const answerphoneSlice = createSlice({
  name: 'answerphone',
  initialState: {
    value: false
  },
  reducers: {
    changeAnswerphoneState: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { changeAnswerphoneState } = answerphoneSlice.actions

export default answerphoneSlice.reducer