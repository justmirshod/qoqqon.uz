import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  data: {},
  loading: false,
};

export const fetchManager = createAsyncThunk(
  'manager/fetchManager',
  async () => {
    const { request } = useHttp();
    return await request({ url: '/api/v1/department/hokim-assistant/' });
  }
);

const managerAsistantSlice = createSlice({
  name: 'manager',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchManager.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(fetchManager.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      });
  },
});

export default managerAsistantSlice.reducer;
