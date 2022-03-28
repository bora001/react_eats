import React from "react";
import CartBtn from "./CartBtn";
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
            <CartBtn data={item} ctx={ctx} />
          </div>
        ))}
      </div>
    </>
  );
};

export default CartList;
