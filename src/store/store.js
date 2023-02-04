import { configureStore } from '@reduxjs/toolkit';

import deputiesSliceApi from './api/deputiesSlice.api';
import deputySliceApi from './api/deputySlice.api';
import newsSliceApi from './api/newsSlice.api';
import categoriesSlice from './api/categoriesSlice.api';
import singleNewsSlice from './api/siingleNewsSlice.api';
import moreNewsSlice from './api/moreNewsSlice.api';

const store = configureStore({
  reducer: {
    deputies: deputiesSliceApi,
    deputy: deputySliceApi,
    news: newsSliceApi,
    categories: categoriesSlice,
    singleNews: singleNewsSlice,
    moreNews: moreNewsSlice,
  },
});

export default store;
