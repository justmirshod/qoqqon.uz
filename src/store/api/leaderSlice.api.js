import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';
import { baseURL } from '../../config/config';

const initialState = {
  hokim: {},
  hokimLoading: false,
  success: null,
};

export const fetchHokim = createAsyncThunk('leader/fetchHokim', async () => {
  const { request } = useHttp();
  return await request({ url: `${baseURL}/api/v1/department/hokim/` });
});

const leaderSlice = createSlice({
  name: 'leader',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchHokim.pending, (state) => {
        state.hokimLoading = true;
      })
      .addCase(fetchHokim.fulfilled, (state, action) => {
        state.hokim = action.payload;
        state.hokimLoading = false;
        state.success = true;
      })
      .addCase(fetchHokim.rejected, (state) => {
        state.success = false;
      });
  },
});

const { reducer } = leaderSlice;
export default reducer;
