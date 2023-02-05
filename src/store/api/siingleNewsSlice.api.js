import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  singleNews: {},
  loading: false,
  success: null,
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
        state.success = null;
      })
      .addCase(fetchSingleNews.fulfilled, (state, action) => {
        state.singleNews = action.payload;
        state.loading = false;
        state.success = true;
      })
      .addCase(fetchSingleNews.rejected, (state) => {
        state.success = false;
      });
  },
});

const { reducer } = singleNewsSlice;
export default reducer;
