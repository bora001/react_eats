import React, { useState, useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CartForm from "./CartForm";
import { firebaseUrl } from "../../dev";
import "./Cart.css";

const Cart = (props) => {
  const [orderStatus, setOrderStatus] = useState(false);
  const cartCtx = useContext(CartContext);

  const orderItem = () => {
    setOrderStatus(true);
    console.log("order item", cartCtx.items);
  };

  const inputValidCheck = (e) => {
    e.preventDefault();
    console.log("submit?");
    const inputBox = document.querySelectorAll(".input_box input");
    const inputErr = document.querySelectorAll(".input_box input.input_err");
    const inputArr = Array.from(inputBox);
    let data = {};

    inputBox.forEach((input) => {
      if (input.id !== "msg" && input.value.trim() == "") {
        input.classList.add("input_err");
      }
      data[input.id] = input.value;
    });

    let inputValid = inputArr.some((input) =>
      input.classList.contains("input_err")
    );
    if (!inputValid) {
      postData(data);
    }
  };

  const postData = async (data) => {
    const date = new Date();

    let body = {
      ...data,
      id: `${new Date().getTime()}${
        (Math.random() * 10).toString(16).split(".")[1]
      }`,
      item: cartCtx.items,
      time: `${date.toLocaleDateString()} ${date.toTimeString().split(" ")[0]}`,
    };
    const res = await fetch(firebaseUrl + `Orders.json`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    console.log(body);
    console.log(await res.json());
  };

  return (
    <Modal>
      <div className="cart_box">
        {orderStatus ? (
          <CartForm items={cartCtx.items} submitEvent={inputValidCheck} />
        ) : (
          <CartList items={cartCtx} />
        )}
      </div>
      <div className="total_box">
        <h3>Total Amount</h3>
        <p>$ {cartCtx.totalAmount}</p>
      </div>
      <div className="btn_box">
        <button className="btn_close" onClick={props.modal}>
          Close
        </button>
        {cartCtx.items.length > 0 && !orderStatus && (
          <button onClick={orderItem}>Order</button>
        )}
        {orderStatus && <button onClick={inputValidCheck}>Confirm</button>}
      </div>
    </Modal>
  );
};

export default Cart;
