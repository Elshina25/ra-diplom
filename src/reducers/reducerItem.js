import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  item: null,
  loading: false,
  error: null,
}

const reducerItem = createSlice({
  name: 'reducerItem',
  initialState: initialState,
  reducers: {
    itemRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    itemRequestSusccess(state, action) {
      const item = action.payload;
      return {
        ...state,
        item,
        loading: false,
        error: null,
      };
    },

    itemRequestFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
  }
})

export const { itemRequest, itemRequestSusccess, itemRequestFailure } = reducerItem.actions;
export default reducerItem.reducer;