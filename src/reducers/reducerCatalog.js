import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  categories: [],
  categoryId: 0,
  more: 0,
  noMore: false,
  searchCatalogItem: '',
  loading: false,
  error: null,
}

const reducerCatalog = createSlice({
  name: 'reducerCatalog',
  initialState: initialState,
  reducers: {
    catalogRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    catalogRequestSusccess(state, action) {
      const items = action.payload;
      const noMore = items.length < 6 ? true : false;
      const copy = [...state.items, ...items];
      return {
        ...state,
        items: copy,
        loading: false,
        error: null,
        noMore
      };
    },

    categoriesRequestSusccess(state, action) {
      const categories = action.payload;
      return {
        ...state,
        categories,
        loading: false,
        error: null,
      };
    },

    catalogRequestFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    },

    selectCategory(state, action) {
      const categoryId = action.payload;
      return {
        ...state,
        items: [],
        more: 0,
        categoryId,
        noMore: false
      };
    },

    loadMore(state, action) {
      const more = state.more + action.payload;
      return {
        ...state,
        more
      };
    },

    submitSearch(state, action) {
      const searchCatalogItem = action.payload;
      return {
        ...state,
        searchCatalogItem,
        items: [],
        more: 0,
        noMore: false
      };
    },

    resetCatalog() {
      return initialState;
    },
  }
})

export const { 
  selectCategory, 
  catalogRequest, 
  catalogRequestSusccess, 
  categoriesRequestSusccess, 
  catalogRequestFailure,
  loadMore,
  resetCatalog,
  submitSearch,
} = reducerCatalog.actions;
export default reducerCatalog.reducer;