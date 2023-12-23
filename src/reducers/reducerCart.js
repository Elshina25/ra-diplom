import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  status: "idle",
}

export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (owner, { getState }) => {
    const { items } = getState().reducerCart;
    const response = await fetch(`${process.env.REACT_APP_API_URL_LOCAL}/api/order`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ owner, items }),
    });
    return response.ok;
  }
);

const reducerCart = createSlice({
  name: 'reducerCart',
  initialState: initialState,
  reducers: {
    cartAddItem(state, action) {
      const { id, size, count } = action.payload;
      const exist = state.items.findIndex(
        (item) => item.id === id && item.size === size
      );
      if (exist === -1) {
        state.items.push(action.payload)
      } else {
        state.items[exist].count += count
      }
    },

    cartReset(state, action) {
      return initialState;
    },

    cartDeleteItem(state, action) {
      state.items.splice(action.payload, 1);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = "pending";
      })
      .addCase(postOrder.rejected, (state) => {
        state.status = "error";
      })
      .addCase(postOrder.fulfilled, (state) => {
        // state.items = [];
        state.status = "success";
      });
  },
});

export const { cartAddItem, cartReset, cartDeleteItem } = reducerCart.actions;
export default reducerCart.reducer;