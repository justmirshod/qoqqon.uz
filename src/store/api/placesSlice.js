import ky from 'ky';

const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const getHistoricalPlaces = createAsyncThunk(
  'places/getHistoricalPlaces',
  async () =>
    await ky
      .get(
        'https://abdusamad4803.pythonanywhere.com/api/v1/hokimiyatinfo/history/'
      )
      .json()
);

export const getInterestingPlaces = createAsyncThunk(
  'places/getInterestingPlaces',
  async () =>
    await ky
      .get(
        'https://abdusamad4803.pythonanywhere.com/api/v1/hokimiyatinfo/places/'
      )
      .json()
);

export const getPlace = createAsyncThunk(
  'places/getPlace',
  async ({ id }) =>
    await ky
      .get(
        `https://abdusamad4803.pythonanywhere.com/api/v1/hokimiyatinfo/places/${id}/`
      )
      .json()
);

const placesSlice = createSlice({
  name: 'places',
  initialState: {
    isLoading: false,
    info: {},
    interestingPlaces: [],
    place: {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getHistoricalPlaces.pending ||
          getInterestingPlaces.pending ||
          getPlace.pending,
        (state) => {
          state.isLoading = true;
        }
      )
      .addCase(getHistoricalPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.info = action.payload;
      })
      .addCase(getInterestingPlaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.interestingPlaces = action.payload.results;
      })
      .addCase(getPlace.fulfilled, (state, action) => {
        state.place = action.payload;
      });
  },
});

export default placesSlice.reducer;
