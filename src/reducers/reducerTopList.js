import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  loading: false,
  error: null,
}

const reducerTopList = createSlice({
  name: 'reducerTopList',
  initialState: initialState,
  reducers: {
    tlRequest(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },

    tlRequestSusccess(state, action) {
      const items = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    },

    tlRequestFailure(state, action) {
      const error = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    }
  }
})

export const { tlRequest, tlRequestSusccess, tlRequestFailure } = reducerTopList.actions;
export default reducerTopList.reducer;