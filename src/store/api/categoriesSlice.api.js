import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  categories: {},
  loadingCat: true,
  successCat: null,
  activeCategory: 'all',
  activePageIndex: 0,
};

export const getAllCategories = createAsyncThunk(
  'news/getAllCategories',
  async () => {
    const { request } = useHttp();
    return await request(
      'get',
      'https://abdusamad4803.pythonanywhere.com/api/v1/blog/categories/?page_size=20'
    );
  }
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
    setActivePage: (state, action) => {
      state.activePageIndex = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loadingCat = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loadingCat = false;
        state.successCat = true;
      })
      .addCase(getAllCategories.rejected, (state) => {
        state.successCat = false;
      });
  },
});

const { reducer, actions } = categoriesSlice;
export default reducer;
export const { setActiveCategory, setActivePage } = actions;
