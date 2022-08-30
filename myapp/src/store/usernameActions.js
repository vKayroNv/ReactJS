import { createSlice } from '@reduxjs/toolkit'

export const usernameSlice = createSlice({
  name: 'username',
  initialState: {
    value: 'testuser',
  },
  reducers: {
    changeUsername: (state, action) => {
      state.value = action.payload
    }
  },
})

export const { changeUsername } = usernameSlice.actions

export default usernameSlice.reducer