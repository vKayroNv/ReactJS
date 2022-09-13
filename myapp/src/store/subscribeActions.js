import { createSlice } from '@reduxjs/toolkit'
import { subscribeAsync } from '../services/repos/subscribe'

export const subscribeSlice = createSlice({
  name: 'subscribe',
  initialState: {
    loading: false,
    error: null
  },
  reducers: {
  },
  extraReducers: {
    [subscribeAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [subscribeAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [subscribeAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
})

// export const { } = subscribeSlice.actions

export default subscribeSlice.reducer