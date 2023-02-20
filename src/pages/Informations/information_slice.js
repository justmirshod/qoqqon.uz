import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  loading: false,
  data: {},
};

export const fetchInformations = createAsyncThunk(
  'information/fetchInformations',
  async () => {
    const { request } = useHttp();
    return await request({ url: '/api/v1/department/axborot-xizmati/' });
  }
);

export const informationSlice = createSlice({
  name: 'information',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchInformations.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(fetchInformations.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      });
  },
});

export default informationSlice.reducer;
