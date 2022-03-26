import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

import "./AddBtn.css";
const AddBtn = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  return (
    <div>
      <button onClick={() => cartCtx.addItem(props.data)}>+ ADD</button>
    </div>
  );
};

export default AddBtn;
