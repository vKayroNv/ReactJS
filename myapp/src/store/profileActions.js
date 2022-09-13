import { createSlice } from '@reduxjs/toolkit'
import { changePasswordAsync, changeDisplayNameAsync, getDisplayNameAsync } from '../services/repos/profile';

export const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    displayName: '',
    uid: '',
    loading: false,
    error: null,
  },
  reducers: {
    clearProfile: (state) => {
      state.displayName = '';
      state.uid = '';
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {
    [changePasswordAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [changePasswordAsync.fulfilled]: (state) => {
      state.loading = false;
      state.error = null;
    },
    [changePasswordAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [changeDisplayNameAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [changeDisplayNameAsync.fulfilled]: (state, action) => {
      state.displayName = action.payload;
      state.loading = false;
      state.error = null;
    },
    [changeDisplayNameAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getDisplayNameAsync.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [getDisplayNameAsync.fulfilled]: (state, action) => {
      state.uid = action.payload.uid;
      state.displayName = action.payload.displayName;
      state.loading = false;
      state.error = null;
    },
    [getDisplayNameAsync.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
  }
})

export const { clearProfile } = profileSlice.actions

export default profileSlice.reducer