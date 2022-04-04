import React, { useState, useEffect } from "react";
import "./Header.css";
import { useSelector } from "react-redux";

const Header = (props) => {
  const cartInfo = useSelector((state) => state.cart);
  const [styleClass, setStyleClass] = useState("cart_btn");
  useEffect(() => {
    setStyleClass("cart_btn");

    return () => {
      setTimeout(() => {
        setStyleClass("cart_btn active_btn");
      }, 50);
    };
  }, [cartInfo.totalAmount]);

  return (
    <div>
      <header>
        <h1>
          <a href="/">React Eats</a>
        </h1>
        <div className="right_box">
          <button className="btn_myorder" value="true" onClick={props.myorder}>
            My Order
          </button>
          <button className={styleClass} value="true" onClick={props.modal}>
            Cart <span>{cartInfo.items.length}</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
