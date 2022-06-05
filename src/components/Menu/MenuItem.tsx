import React from "react";
import AddBtn from "./AddBtn";
import "./MenuItem.css";
import { cartItemType } from "../../store/cart-slice";
const MenuItem = (props: { data: cartItemType }) => {
  return (
    <div className="menu_box">
      <div className="menu_item">
        <p className="menu_name">{props.data.name}</p>
        <p className="menu_desc">{props.data.desc}</p>
        <p className="menu_price">$ {props.data.price}</p>
      </div>
      <AddBtn data={props.data} />
    </div>
  );
};

export default MenuItem;
