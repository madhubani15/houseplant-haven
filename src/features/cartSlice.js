import { createSlice } from '@reduxjs/toolkit';
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
const existing = state.items[plant.id];
if (!existing) {
state.items[plant.id] = { plant, qty: 1 };
}
// if exists, do nothing — disabling add button is handled by UI
const totals = calcTotals(state.items);
state.totalItems = totals.totalItems;
state.totalCost = totals.totalCost;
},
increaseQty(state, action) {
const id = action.payload;
const entry = state.items[id];
if (entry) {
entry.qty += 1;
}
const totals = calcTotals(state.items);
state.totalItems = totals.totalItems;
state.totalCost = totals.totalCost;
},
decreaseQty(state, action) {
const id = action.payload;
const entry = state.items[id];
if (entry) {
entry.qty -= 1;
if (entry.qty <= 0) delete state.items[id];
}
const totals = calcTotals(state.items);
state.totalItems = totals.totalItems;
state.totalCost = totals.totalCost;
},
deleteItem(state, action) {
const id = action.payload;
if (state.items[id]) delete state.items[id];
const totals = calcTotals(state.items);
state.totalItems = totals.totalItems;
state.totalCost = totals.totalCost;
}
}
});


export const { addToCart, increaseQty, decreaseQty, deleteItem } = cartSlice.actions;
export default cartSlice.reducer;
