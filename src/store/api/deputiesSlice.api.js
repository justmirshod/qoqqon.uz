import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ky from 'ky';

export const getDeputies = createAsyncThunk(
  'deputies/getDeputies',
  async ({ page }) =>
    await ky
      .get(
        `https://abdusamad4803.pythonanywhere.com/api/v1/department/deputats/?page=${page}&page_size=${2}`
      )
      .json()
);

const deputiesSLice = createSlice({
  name: 'deputies',
  initialState: {
    isLoading: false,
    deputies: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDeputies.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getDeputies.fulfilled, (state, action) => {
        state.isLoading = false;
        state.deputies = action.payload;
      });
  },
});

export default deputiesSLice.reducer;
