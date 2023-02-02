import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  news: {},
  loading: false,
  success: null,
};

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async ({ category, search, popular, page, page_size }) => {
    return await fetch(
      `https://abdusamad4803.pythonanywhere.com/api/v1/blog/posts/?category=${category}&search=${search}&popular=${popular}&page=${page}&page_size=${page_size}`
    ).then((res) => res.json());
  }
);

const newsSlice = createSlice({
  name: 'news',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllNews.fulfilled, (state, action) => {
        state.loading = false;
        state.news = action.payload;
        state.success = true;
      })
      .addCase(getAllNews.rejected, (state, action) => {
        state.success = false;
      });
  },
});

const { reducer, actions } = newsSlice;
export default reducer;
