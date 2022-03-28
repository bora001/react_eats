import React, { useState, useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../UI/Modal";
import CartList from "./CartList";
import CartForm from "./CartForm";
import "./Cart.css";

const Cart = (props) => {
  const [orderStatus, setOrderStatus] = useState(false);
  const cartCtx = useContext(CartContext);

  const orderItem = () => {
    setOrderStatus(true);
    console.log("order item", cartCtx.items);
  };

  const confirmOrder = () => {
    console.log("confirm-order");
  };

  return (
    <Modal>
      <div className="cart_box">
        {orderStatus ? (
          <CartForm items={cartCtx.items} />
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
        {orderStatus && <button onClick={confirmOrder}>Confirm</button>}
      </div>
    </Modal>
  );
};

export default Cart;
