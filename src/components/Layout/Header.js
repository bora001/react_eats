import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <h1>React Eats</h1>
        <button className="cart_btn">
          Cart <span>3</span>
        </button>
      </header>
    </div>
  );
};

export default Header;
