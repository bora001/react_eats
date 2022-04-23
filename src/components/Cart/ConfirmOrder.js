import React from "react";
import "./ConfirmOrder.css";
import { firebaseKey } from "../../dev";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const ConfirmOrder = (props) => {
  const dispatch = useDispatch();
  const formChange = (e) => {
    e.target.classList.remove("input_err");
  };

  const inputValidCheck = (e) => {
    e.preventDefault();
    const inputBox = document.querySelectorAll(".input_box input");
    const inputArr = Array.from(inputBox);
    let data = {};

    inputBox.forEach((input) => {
      if (input.id !== "msg" && input.value.trim() === "") {
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
      item: props.ctx.items,
      totalAmount: props.ctx.totalAmount,
      time: `${date.toLocaleDateString()} ${date.toTimeString().split(" ")[0]}`,
    };

    const res = await fetch(firebaseKey.firebaseUrl + `Orders.json`, {
      method: "POST",
      body: JSON.stringify(body),
    });

    let json = await res.json();
    props.setStatus("CompleteOrder");
    body.id = json.name;
    props.orderDetail(body);
    dispatch(cartAction.clearItem());
  };

  return (
    <div className="cart_form">
      <h2>Order Information</h2>
      {props.ctx.items.map((item) => (
        <div className="order_item" key={item.id}>
          <p>
            {item.name} <span>x {item.qty}</span>
          </p>
          <p>${item.qty * item.price}</p>
        </div>
      ))}
      <form onChange={formChange}>
        <div className="input_box">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" required />
        </div>
        <div className="input_box">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Address" id="address" required />
        </div>
        <div className="input_box">
          <label htmlFor="contact">Contact</label>
          <input
            type="tel"
            placeholder="Contact number"
            id="contact"
            required
          />
        </div>
        <div className="input_box">
          <label htmlFor="msg">leave a message</label>
          <input type="text" placeholder="leave a message" id="msg" />
        </div>
      </form>
      <div className="total_box">
        <h3>Total Amount</h3>
        <p>$ {props.ctx.totalAmount}</p>
      </div>
      <div className="btn_box">
        <button
          className="btn_close"
          onClick={() => dispatch(cartAction.currentModal(""))}
        >
          Close
        </button>
        <button onClick={inputValidCheck}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
