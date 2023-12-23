import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: '',
  visible: false
}

const reducerHeadSearch = createSlice({
  name: 'reducerHeadSearch',
  initialState: initialState,
  reducers: {
    onChange(state, actions) {
      const search = actions.payload;
      return {
        ...state,
        search
      }
    },

    showInpit(state) {
      const visible = !state.visible;
      return {
        ...state,
        visible
      }
    },

    resetSearch() {
      return initialState;
    }
  }
})

export const { 
  onChange,
  showInpit,
  resetSearch
} = reducerHeadSearch.actions;
export default reducerHeadSearch.reducer;