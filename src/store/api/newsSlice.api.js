import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  //news
  news: {},
  latestNews: {},
  latestNewsLoading: false,
  loading: false,
  success: null,
};

export const getAllNews = createAsyncThunk(
  'news/getAllNews',
  async ({
    category = '',
    search = '',
    popular = '',
    page = 1,
    page_size = 10,
  }) => {
    const { request } = useHttp();
    return await request({
      url: `https://abdusamad4803.pythonanywhere.com/api/v1/blog/posts/?category=${category}&search=${search}&popular=${popular}&page=${page}&page_size=${page_size}`,
    });
  }
);

export const getLatestNews = createAsyncThunk(
  'news/getLatestNews',
  async () => {
    const { request } = useHttp();
    return await request({ url: '/api/v1/blog/posts/?page_size=3' });
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
      })
      .addCase(getLatestNews.pending, (state, { payload }) => {
        state.latestNewsLoading = true;
      })
      .addCase(getLatestNews.fulfilled, (state, { payload }) => {
        state.latestNews = payload;
        state.latestNewsLoading = false;
      });
  },
});

const { reducer } = newsSlice;
export default reducer;
