import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLangLoading: false,
  activeLang: 'uz',
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
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
