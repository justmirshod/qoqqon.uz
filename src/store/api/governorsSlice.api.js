import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';
import { baseURL } from '../../config/config';

const initialState = {
  governors: {},
  governorsLoading: false,
  success: null,
};

export const fetchGovernors = createAsyncThunk(
  'governors/fetchGovernors',
  async () => {
    const { request } = useHttp();
    return await request({
      url: `${baseURL}/api/v1/department/hokim-orinbosars/`,
    });
  }
);

const governorsSlice = createSlice({
  name: 'governors',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchGovernors.pending, (state) => {
        state.governorsLoading = true;
      })
      .addCase(fetchGovernors.fulfilled, (state, action) => {
        state.governors = action.payload;
        state.governorsLoading = false;
        state.success = true;
      })
      .addCase(fetchGovernors.rejected, (state) => {
        state.success = false;
      });
  },
});

const { reducer } = governorsSlice;
export default reducer;
