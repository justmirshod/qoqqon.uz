import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../../../hooks/useHttp';

const initialState = {
  loading: true,
  questions: {},
};

export const fetchFaq = createAsyncThunk('faq/fetchFaq', async () => {
  const { request } = useHttp();
  return await request({ url: '/api/v1/hokimiyatinfo/faq/' });
});

const faqSlice = createSlice({
  name: 'faq',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchFaq.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFaq.fulfilled, (state, { payload }) => {
        state.questions = payload;
        state.loading = false;
      });
  },
});

export default faqSlice.reducer;
