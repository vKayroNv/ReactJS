import { createSlice } from '@reduxjs/toolkit'
import { loginAsync, logoutAsync, registerAsync } from '../services/repos/auth';

// test accs
// user1@domain.com 123456
// user2@domain.com 123456

export const firebaseSlice = createSlice({
  name: 'firebase',
  initialState: {
    loading: false,
    error: null
  },
  reducers: { 
    clearState: (state) => {
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {
    [registerAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [registerAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [registerAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [loginAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [loginAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [logoutAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [logoutAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [logoutAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
});

export const { clearState } = firebaseSlice.actions

export default firebaseSlice.reducer