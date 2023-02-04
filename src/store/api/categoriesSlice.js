import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import ky from 'ky';

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async () =>
    await ky
      .get(
        'https://abdusamad4803.pythonanywhere.com/api/v1/hokimiyatinfo/category/'
      )
      .json()
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    isLoading: false,
    categories: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.categories = action.payload.results;
      });
  },
});

export default categoriesSlice.reducer;
