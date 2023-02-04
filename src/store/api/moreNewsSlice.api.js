import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  moreNews: {},
  loading: true,
};

export const fetchMoreNews = createAsyncThunk(
  'morenews/fetchMoreNews',
  async (slug) => {
    const { request } = useHttp();
    return await request(
      'get',
      `https://abdusamad4803.pythonanywhere.com/api/v1/blog/categories/${slug}/posts/`
    );
  }
);

const moreNewsSlice = createSlice({
  name: 'moreNews',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoreNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoreNews.fulfilled, (state, action) => {
        state.moreNews = action.payload;
        state.loading = false;
      });
  },
});

const { reducer } = moreNewsSlice;
export default reducer;
