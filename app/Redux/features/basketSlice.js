import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addtobusket: (state, action) => {
      state.items = [...state.items, action.payload]
    },
    removebusket: (state, action) => {
      const index = state.items.filter(item => item.id === action.payload.id)

      let newbasket = [...state.items]

      if (index.length >= 0) {
        newbasket.splice(index, 1)
      } else {
        console.warn(
          ` can't not fid id please ${action.payload.id} push the data`
        )
      }
      state.items = newbasket
    }
  },
});

export const { addtobusket, removebusket } = basketSlice.actions

export const selectedItems = (state) => state.basket.items

export const selectedwithid = (state, id) => state.basket.items.filter(item => item.id === id)

export const baskettotal = (state) => state.basket.items.reduce((total, item) => (total += item.price), 0)

export default basketSlice.reducer;
