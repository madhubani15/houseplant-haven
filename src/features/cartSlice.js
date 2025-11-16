import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: {},
  totalItems: 0,
  totalCost: 0
};

const calcTotals = (items) => {
  let totalItems = 0;
  let totalCost = 0;
  Object.values(items).forEach(({ plant, qty }) => {
    totalItems += qty;
    totalCost += qty * plant.price;
  });
  return { totalItems, totalCost };
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const plant = action.payload;
      if (!state.items[plant.id]) {
        state.items[plant.id] = { plant, qty: 1 };
      }
      const totals = calcTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalCost = totals.totalCost;
    },

    increaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty += 1;
      }
      const totals = calcTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalCost = totals.totalCost;
    },

    decreaseQty(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].qty -= 1;
        if (state.items[id].qty <= 0) {
          delete state.items[id];
        }
      }
      const totals = calcTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalCost = totals.totalCost;
    },

    deleteItem(state, action) {
      const id = action.payload;
      if (state.items[id]) {
        delete state.items[id];
      }
      const totals = calcTotals(state.items);
      state.totalItems = totals.totalItems;
      state.totalCost = totals.totalCost;
    }
  }
});

export const { addToCart, increaseQty, decreaseQty, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
