import React, { createContext, useReducer } from "react";

export const CartContext = createContext();
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  const sameItem = state.items.filter((item) => item.id === action.item.id);

  switch (action.type) {
    case "ADD":
      if (sameItem.length > 0) {
        sameItem[0].qty = sameItem[0].qty + 1;
        return {
          items: state.items,
          totalAmount: state.totalAmount + action.item.price,
        };
      } else {
        return {
          items: state.items.concat(action.item),
          totalAmount: state.totalAmount + action.item.price,
        };
      }
    case "REMOVE":
      if (action.item.qty > 1) {
        sameItem[0].qty = sameItem[0].qty - 1;
        return {
          items: state.items,
          totalAmount: state.totalAmount - action.item.price,
        };
      } else {
        return {
          items: state.items.filter((item) => item.id !== action.item.id),
          totalAmount: state.totalAmount - action.item.price,
        };
      }
    case "CLEAR":
      return defaultCartState;
    default:
      return defaultCartState;
  }
};

const CartStore = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const storeState = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => {
      dispatchCart({ type: "ADD", item });
    },
    removeItem: (item) => {
      dispatchCart({ type: "REMOVE", item });
    },
    clearItem: () => {
      dispatchCart({ type: "CLEAR" });
    },
  };

  return (
    <CartContext.Provider value={storeState}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartStore;
