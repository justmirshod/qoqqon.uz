import { configureStore } from '@reduxjs/toolkit';

import deputiesSliceApi from './api/deputiesSlice.api';
import deputySliceApi from './api/deputySlice.api';
import newsSliceApi from './api/newsSlice.api';
import newsCategoriesSlice from './api/categoriesSlice.api';
import singleNewsSlice from './api/siingleNewsSlice.api';
import moreNewsSlice from './api/moreNewsSlice.api';
import placesSlice from './api/placesSlice';
import categoriesSlice from './api/categoriesSlice';
import langSlice from '../components/Navbar/navbar_slice';
import power from '../pages/GovernorPowers/power_slice';
import managerAsistants from '../pages/ManagerAsistant/managers_slice';

import leaderSlice from './api/leaderSlice.api';
import governorsSlice from './api/governorsSlice.api';
import singleGovernorSlice from './api/singleGovernorSlice.api';
import map from '../pages/Map/MapSlice';

const store = configureStore({
  reducer: {
    deputies: deputiesSliceApi,
    deputy: deputySliceApi,
    places: placesSlice,
    categories: categoriesSlice,
    language: langSlice,
    news: newsSliceApi,
    newsCategories: newsCategoriesSlice,
    singleNews: singleNewsSlice,
    moreNews: moreNewsSlice,
    map,
    power,
    managerAsistants,
    leader: leaderSlice,
    governors: governorsSlice,
    singleGovernor: singleGovernorSlice,
  },
});

export default store;
