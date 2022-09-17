import { createSlice } from '@reduxjs/toolkit'
import { getAllGists } from './gists';

export const gistsSlice = createSlice({
  name: 'gists',
  initialState: {
    value: {
      gists: [],
      loading: false,
      error: null,  
    }
  },
  reducers: { },
  extraReducers: {
    [getAllGists.pending]: (state) => {
      state.value.loading = true;
      state.value.error = null;
    },
    [getAllGists.fulfilled]: (state, action) => {
      state.value.gists = [...action.payload];
      state.value.loading = false;
      state.value.error = null;
    },
    [getAllGists.rejected]: (state, action) => {
      state.value.loading = false;
      state.value.error = action.error.message;
    },
  }
});

//export const { } = gistsSlice.actions

export default gistsSlice.reducer