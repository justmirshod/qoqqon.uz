import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ky from 'ky';

export const getDeputy = createAsyncThunk(
  'deputy/getDeputy',
  async ({ id }) =>
    await ky
      .get(
        `https://abdusamad4803.pythonanywhere.com/api/v1/department/deputats/${id}/`
      )
      .json()
);

const deputySlice = createSlice({
  name: 'deputy',
  initialState: {
    isLoading: false,
    deputy: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeputy.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeputy.fulfilled, (state, action) => {
        state.deputy = action.payload;
      });
  },
});

export default deputySlice.reducer;
