import { configureStore } from '@reduxjs/toolkit';

import deputiesSliceApi from './api/deputiesSlice.api';
import deputySliceApi from './api/deputySlice.api';
import newsSliceApi from './api/newsSlice.api';

const store = configureStore({
  reducer: {
    deputies: deputiesSliceApi,
    deputy: deputySliceApi,
    news: newsSliceApi,
  },
});

export default store;
