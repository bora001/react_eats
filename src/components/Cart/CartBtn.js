import React from "react";
import "./CartBtn.css";
const CartBtn = (props) => {
  return (
    <div className="cart_btn">
      <button onClick={() => props.ctx.removeItem(props.data)}>-</button>
      <p>{props.data.qty}</p>
      <button onClick={() => props.ctx.addItem(props.data)}>+</button>
    </div>
  );
};

export default CartBtn;
