import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { baseURL } from '../../config/config';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  governor: {},
  governorLoading: false,
  success: null,
};

export const fetchGovernor = createAsyncThunk(
  'singleGovernor/fetchGovernor',
  async (id) => {
    const { request } = useHttp();
    return await request({
      url: `${baseURL}/api/v1/department/hokim-orinbosars/${id}/`,
    });
  }
);

const singleGovernorSlice = createSlice({
  name: 'singleGovernor',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGovernor.pending, (state) => {
        state.governorLoading = true;
        state.success = null;
      })
      .addCase(fetchGovernor.fulfilled, (state, action) => {
        state.governor = action.payload;
        state.governorLoading = false;
        state.success = true;
      })
      .addCase(fetchGovernor.rejected, (state, action) => {
        state.success = false;
      });
  },
});

const { reducer } = singleGovernorSlice;
export default reducer;
