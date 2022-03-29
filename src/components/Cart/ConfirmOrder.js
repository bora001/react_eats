import React from "react";
import "./ConfirmOrder.css";
// import { firebaseUrl } from "../../dev";

const ConfirmOrder = (props) => {
  console.log(props, "orderconfirm");
  const formChange = (e) => {
    e.target.classList.remove("input_err");
  };

  const inputValidCheck = (e) => {
    e.preventDefault();
    console.log("submit?");
    const inputBox = document.querySelectorAll(".input_box input");
    // const inputErr = document.querySelectorAll(".input_box input.input_err");
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
      id: `${new Date().getTime()}${
        (Math.random() * 10).toString(16).split(".")[1]
      }`,
      item: props.ctx.items,
      time: `${date.toLocaleDateString()} ${date.toTimeString().split(" ")[0]}`,
    };
    // const res = await fetch(firebaseUrl + `Orders.json`, {
    //   method: "POST",
    //   body: JSON.stringify(body),
    // });

    console.log(body);
    props.setStatus("CompleteOrder");
    // console.log(await res.json());
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
        <button className="btn_close" onClick={props.modal}>
          Close
        </button>
        <button onClick={inputValidCheck}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
