import { createSlice } from "@reduxjs/toolkit";

export type cartItemType = {
  desc: string;
  id: string;
  name: string;
  price: number;
  qty: number;
};

export type cartType = {
  items: cartItemType[];
  totalAmount: number;
  modalStatus: string;
  cartStatus: string;
  userUid: string;
};

const initialState: cartType = {
  items: [],
  totalAmount: 0,
  modalStatus: "",
  cartStatus: "",
  userUid: "",
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const sameItem = state.items.filter(
        (item) => item.id === action.payload.id
      );
      if (sameItem.length > 0) {
        sameItem[0].qty = sameItem[0].qty + 1;
        state.totalAmount = state.totalAmount + action.payload.price;
      } else {
        state.items = state.items.concat(action.payload);
        state.totalAmount = state.totalAmount + action.payload.price;
      }
    },
    removeItem(state, action) {
      const sameItem = state.items.filter(
        (item) => item.id === action.payload.id
      );
      if (action.payload.qty > 1) {
        sameItem[0].qty = sameItem[0].qty - 1;
        state.totalAmount = state.totalAmount - action.payload.price;
      } else {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
        state.totalAmount = state.totalAmount - action.payload.price;
      }
    },
    clearItem(state) {
      state.items = initialState.items;
      state.totalAmount = initialState.totalAmount;
    },
    userLogin(state, action) {
      state.userUid = action.payload;
    },
    userLogout(state) {
      state.userUid = "";
    },
    currentModal(state, action) {
      state.modalStatus = action.payload;
    },
    currentCart(state, action) {
      state.cartStatus = action.payload;
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice;
