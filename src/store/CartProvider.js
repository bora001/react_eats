import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    console.log("reducer-add!!");
    const updatedItem = state.items.concat(action.item);
    const updatedAmount = state.totalAmount + action.item.price;
    console.log(updatedItem, updatedAmount);
    return { items: updatedItem, totalAmount: updatedAmount };
  }
  //   if (action.type === "REMOVE") {
  //   }
  return defaultCartState;
};

const CartStore = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const storeState = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCart({ type: "ADD", item });
    },
    removeItem: (id) => {
      console.log("cartContext-removeItem", id);
    },
  };

  return (
    <CartContext.Provider value={storeState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartStore;
