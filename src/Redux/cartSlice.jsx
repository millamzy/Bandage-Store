import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  clickCounts: {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    incrementClickCount(state, action) {
      const itemId = action.payload;
      if (state.clickCounts[itemId]) {
        state.clickCounts[itemId] += 1;
      } else {
        state.clickCounts[itemId] = 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementClickCount } = cartSlice.actions;

export default cartSlice.reducer;
