import React from "react";
import "./MenuItem.css";
const MenuItem = (props) => {
  return (
    <div className="menu_item">
      <p className="menu_name">{props.data.name}</p>
      <p className="menu_desc">{props.data.desc}</p>
      <p className="menu_price">$ {props.data.price}</p>
    </div>
  );
};

export default MenuItem;
