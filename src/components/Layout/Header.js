import React from "react";
import "./Header.css";
const Header = (props) => {
  return (
    <div>
      <header>
        <h1>React Eats</h1>
        <button className="cart_btn" value="true" onClick={props.modal}>
          Cart <span>3</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
