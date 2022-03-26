import React from "react";
import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = (props) => {
  const orderBtn = () => {};

  return (
    <Modal>
      <div className="cart_box">
        <div className="txt_box">
          <h3>Total Amount</h3>
          <p>$ 35.62</p>
        </div>

        <div className="btn_box">
          <button className="btn_close" onClick={props.modal}>
            Close
          </button>
          <button onClick={orderBtn}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
