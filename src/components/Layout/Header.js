import React, { useState, useEffect, useContext } from "react";
import {} from "react/cjs/react.production.min";
import { CartContext } from "../../store/CartProvider";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  const [styleClass, setStyleClass] = useState("cart_btn");
  useEffect(() => {
    setStyleClass("cart_btn");

    return () => {
      setTimeout(() => {
        setStyleClass("cart_btn active_btn");
      }, 50);
    };
  }, [cartCtx.totalAmount]);

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
            Cart <span>{cartCtx.items.length}</span>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
