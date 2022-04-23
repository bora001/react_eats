import React, { useState, useEffect } from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { cartAction } from "../../store/cart-slice";
import { getAuth, signOut } from "firebase/auth";
const Header = (props) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
  const [styleClass, setStyleClass] = useState("cart_btn");
  const auth = getAuth();
  useEffect(() => {
    setStyleClass("cart_btn");

    return () => {
      setTimeout(() => {
        setStyleClass("cart_btn active_btn");
      }, 50);
    };
  }, [cartInfo.totalAmount]);

  const setModal = (e) => {
    dispatch(cartAction.currentModal(e.currentTarget.value));
  };
  const setCart = (e) => {
    console.log(e.currentTarget.value);
    dispatch(cartAction.currentCart(e.currentTarget.value));
  };

  const userLogout = () => {
    dispatch(cartAction.userLogout());
    signOut(auth).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div>
      <header>
        <Link to="/">
          <h1>React Eats</h1>
        </Link>
        {cartInfo.userUid ? (
          <div className="right_box">
            <button
              className="btn_myorder"
              value="true"
              onClick={props.myorder}
            >
              My Order
            </button>
            <button className={styleClass} value="PreOrder" onClick={setCart}>
              Cart <span>{cartInfo.items.length}</span>
            </button>
            <button onClick={userLogout}>Logout</button>
          </div>
        ) : (
          <div className="right_box">
            <button onClick={setModal} value="Login">
              Login
            </button>
            <button onClick={setModal} value="Register">
              Register
            </button>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
