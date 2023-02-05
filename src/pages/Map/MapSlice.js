import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

export const getMahallaInfo = createAsyncThunk(
  'map/getMahallaInfo',
  async (id) => {
    const { request } = useHttp();

    return await request({
      url: `https://abdusamad4803.pythonanywhere.com/api/v1/hokimiyatinfo/mahalla/${id}/`,
    });
  }
);

const initialState = {
  sector: 0,
  mahallaId: '',
  mahallaName: '',
  modal: false,
  animation: false,
  anim: false,

  mahallaInfo: {
    loading: false,
    data: [],
    message: '',
    isSuccess: false,
  },

  coordinates: {
    x: '',
    y: '',
  },
};

const MapSlice = createSlice({
  name: 'map',
  initialState,
  reducers: {
    setSector: (state, { payload }) => {
      state.sector = payload;
    },
    setMahallaId: (state, { payload }) => {
      state.mahallaId = payload;
    },
    setMahallaName: (state, { payload }) => {
      state.mahallaName = payload;
    },
    setModal: (state, { payload }) => {
      state.modal = payload;
    },
    setAnimation: (state, { payload }) => {
      state.animation = payload;
    },
    setMessage: (state) => {
      state.mahallaInfo.message = '';
    },
    setAnim: (state, { payload }) => {
      state.anim = payload;
    },
    setX: (state, { payload }) => {
      state.coordinates.x = payload;
    },
    setY: (state, { payload }) => {
      state.coordinates.y = payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getMahallaInfo.pending, (state, { payload }) => {
        state.mahallaInfo.loading = true;
        state.mahallaInfo.isSuccess = false;
      })
      .addCase(getMahallaInfo.fulfilled, (state, { payload }) => {
        state.mahallaInfo.data = payload;
        state.mahallaInfo.loading = false;
        state.mahallaInfo.isSuccess = true;
        state.mahallaInfo.message = '';
      })
      .addCase(getMahallaInfo.rejected, (state, { payload }) => {
        state.mahallaInfo.loading = false;
        state.mahallaInfo.isSuccess = false;
        state.mahallaInfo.message = payload;
      }),
});

export const {
  setSector,
  setMahallaId,
  setMahallaName,
  setModal,
  setAnimation,
  setMessage,
  setAnim,
  setX,
  setY,
} = MapSlice.actions;
export default MapSlice.reducer;
