import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";

const AddBtn = (props) => {
  const cartCtx = useContext(CartContext);
  return (
    <div className="add_btn">
      <button onClick={() => cartCtx.addItem(props.data)}>+ ADD</button>
    </div>
  );
};

export default AddBtn;
