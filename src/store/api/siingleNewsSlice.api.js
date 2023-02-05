import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  singleNews: {},
  loading: false,
};

export const fetchSingleNews = createAsyncThunk(
  'singleNews/fetchNews',
  async (id) => {
    const { request } = useHttp();
    return await request({
      url: `https://abdusamad4803.pythonanywhere.com/api/v1/blog/posts/${id}/`,
    });
  }
);

const singleNewsSlice = createSlice({
  name: 'singleNews',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.singleNews = action.payload;
        state.loading = false;
      });
  },
});

const { reducer } = singleNewsSlice;
export default reducer;
