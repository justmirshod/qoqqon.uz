import { configureStore } from '@reduxjs/toolkit';

import deputiesSliceApi from './api/deputiesSlice.api';
import deputySliceApi from './api/deputySlice.api';

import placesSlice from './api/placesSlice';
import categoriesSlice from './api/categoriesSlice';
import langSlice from '../components/Navbar/navbar_slice';


const store = configureStore({
  reducer: {
    deputies: deputiesSliceApi,
    deputy: deputySliceApi,

    places: placesSlice,
    categories: categoriesSlice,
    language: langSlice,

  },
});

export default store;
