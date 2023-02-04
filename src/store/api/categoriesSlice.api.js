import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/useHttp';

const initialState = {
  categories: {},
  loadingCat: true,
  successCat: null,
  activeCategory: 'all',
  activePageIndex: 0,
  categoryChanged: false,
  query: '',
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
      if (state.categoryChanged) return;
      state.categoryChanged = true;
    },
    setActivePage: (state, action) => {
      state.activePageIndex = action.payload;
    },
    setCategoryPageIndex: (state, action) => {
      const idx = state.categories.results?.findIndex(
        (item) => item.slug === action.payload.slug
      );
      state.categories.results[idx].activePageIndex = action.payload.index;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllCategories.pending, (state) => {
        state.loadingCat = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        const newCategory = {
          id: -1,
          translations: {
            uz: {
              name: 'Hammasi',
            },
            ru: {
              name: 'Bce',
            },
            en: {
              name: 'All',
            },
          },
          slug: 'all',
        };

        action.payload.results?.unshift(newCategory);
        action.payload.results?.forEach((item) => {
          item.activePageIndex = 0;
        });
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
export const {
  setActiveCategory,
  setActivePage,
  setCategoryPageIndex,
  setQuery,
} = actions;
