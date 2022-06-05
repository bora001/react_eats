import React, { Dispatch, SetStateAction } from "react";
import { cartAction } from "../../store/cart-slice";
import { getDatabase, ref, push } from "firebase/database";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { OrderType } from "../../store/cart-slice";
import "./ConfirmOrder.css";

const ConfirmOrder = (props: {
  orderDetail: Dispatch<SetStateAction<OrderType | undefined>>;
}) => {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector((state) => state.cart);
  const formChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.target.classList.remove("input_err");
  };

  const inputValidCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const inputBox = document.querySelectorAll(".input_box input");
    const inputArr = Array.from(inputBox);
    let data: {
      [key: string]: string | number;
    } = {};

    inputBox.forEach((input) => {
      const { value, id } = input as HTMLInputElement;
      if (id !== "msg" && value.trim() === "") {
        input.classList.add("input_err");
      }
      if (id == "contact") {
        return (data[id] = Number(value));
      }
      data[id] = value;
    });

    let inputValid = inputArr.some((input) =>
      input.classList.contains("input_err")
    );
    if (!inputValid) {
      postData(data);
    }
  };

  const postData = async (data: any) => {
    const date = new Date();
    const n = Math.random().toString(36).slice(2);
    const body = {
      _id: n + n,
      ...data,
      item: cartInfo.items,
      totalAmount: cartInfo.totalAmount,
      time: `${date.toLocaleDateString()} ${date.toTimeString().split(" ")[0]}`,
    };
    const db = getDatabase();
    push(ref(db, "Order/" + cartInfo.userUid), body).then((data: any) => {
      body.id = data._path.pieces_[2];
      dispatch(cartAction.currentCart("CompleteOrder"));
      props.orderDetail(body);
      dispatch(cartAction.clearItem());
    });
  };

  return (
    <div className="cart_form">
      <h2>Order Information</h2>
      {cartInfo.items.map((item) => (
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
            type="number"
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
        <p>$ {cartInfo.totalAmount}</p>
      </div>
      <div className="btn_box">
        <button
          className="btn_close"
          onClick={() => dispatch(cartAction.currentCart(""))}
        >
          Close
        </button>
        <button onClick={inputValidCheck}>Confirm</button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
