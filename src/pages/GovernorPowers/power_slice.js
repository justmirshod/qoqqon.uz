import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  loading: false,
  data: {},
};

export const fetchGovernorPowers = createAsyncThunk(
  'governorPower/fetchGovernorPower',
  async () => {
    const { request } = useHttp();
    return await request({ url: '/api/v1/department/hokim-vakolati/' });
  }
);

export const powerSlice = createSlice({
  name: 'governorPower',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchGovernorPowers.pending, (state, { payload }) => {
        state.loading = true;
      })
      .addCase(fetchGovernorPowers.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      });
  },
});

export default powerSlice.reducer;
export const {} = powerSlice.actions;
