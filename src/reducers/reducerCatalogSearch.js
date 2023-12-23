import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  catalogSearch: '',
}

const reducerCatalogSearch = createSlice({
  name: 'reducerCatalogSearch',
  initialState: initialState,
  reducers: {
    onChangeCatalogSearch(state, actions) {
      const catalogSearch = actions.payload;
      return {
        ...state,
        catalogSearch
      }
    },

    resetCatalogSearch() {
      return initialState;
    }
  }
})

export const { 
  onChangeCatalogSearch,
  resetCatalogSearch
} = reducerCatalogSearch.actions;
export default reducerCatalogSearch.reducer;