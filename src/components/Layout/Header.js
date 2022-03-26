import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import "./Header.css";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  return (
    <div>
      <header>
        <h1>React Eats</h1>
        <button className="cart_btn" value="true" onClick={props.modal}>
          Cart <span>{cartCtx.items.length}</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
