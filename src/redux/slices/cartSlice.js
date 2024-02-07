import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;

      state.itemsList.push(newItem);
      let existingItem = state.itemsList.find((item) => {
        return item.id === newItem.id;
      });
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemsList.push({
          pName: newItem.pName,
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      }
      state.totalQuantity++;

    },
  },
});
export const { addItem } = cartSlice.actions;

export default cartSlice;
