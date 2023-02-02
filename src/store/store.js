import { configureStore } from '@reduxjs/toolkit';

import deputiesSliceApi from './api/deputiesSlice.api';
import deputySliceApi from './api/deputySlice.api';
import langSlice from '../components/Navbar/navbar_slice';

const store = configureStore({
  reducer: {
    deputies: deputiesSliceApi,
    deputy: deputySliceApi,
    language: langSlice,
  },
});

export default store;
