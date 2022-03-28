import React from "react";
import "./CartList.css";

const CartList = (props) => {
  const ctx = props.items;
  return (
    <>
      <div className="cart_list">
        {ctx.items.map((item) => (
          <div key={Math.random() * 9} className="cart_item">
            <div className="cart_item_desc">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
            </div>
            <div className="cart_btn">
              <button onClick={() => ctx.removeItem(item)}>-</button>
              <p>{item.qty}</p>
              <button onClick={() => ctx.addItem(item)}>+</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CartList;
