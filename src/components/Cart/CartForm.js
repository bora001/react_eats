import React from "react";
import "./CartForm.css";
const CartForm = (props) => {
  console.log(props.items);
  return (
    <div className="cart_form">
      <h2>Order Information</h2>
      {props.items.map((item) => (
        <div className="order_item">
          <p>
            {item.name} <span>x {item.qty}</span>
          </p>
          <p>${item.qty * item.price}</p>
        </div>
      ))}
      <form>
        <div className="input_box">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" />
        </div>
        <div className="input_box">
          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Address" id="address" />
        </div>
        <div className="input_box">
          <label htmlFor="contact">Contact</label>
          <input type="tel" placeholder="Contact number" id="contact" />
        </div>
        <div className="input_box">
          <label htmlFor="msg">leave a message</label>
          <input type="text" placeholder="leave a message" id="msg" />
        </div>
      </form>
    </div>
  );
};

export default CartForm;
