import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLangLoading: false,
  activeLang: 'uz',
  activeTheme: 'light',
  showLangs: false,
};

export const langSlice = createSlice({
  name: 'langs',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.isLangLoading = true;
      state.activeLang = payload;
      state.isLangLoading = false;
    },
    setTheme: (state, { payload }) => {
      state.activeTheme = payload;
    },
    setShowLangs: (state, { payload }) => {
      state.showLangs = payload;
    },
  },
});

export const { setLang, setTheme, setShowLangs } = langSlice.actions;
export default langSlice.reducer;
