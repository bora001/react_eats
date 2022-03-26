import React, { useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../UI/Modal";
import "./Cart.css";
const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);

  const orderBtn = () => {};

  return (
    <Modal>
      <div className="cart_box">
        <div className="cart_list">
          {cartCtx.items.map((item) => (
            <div key={Math.random() * 9} className="cart_item">
              <div className="cart_item_desc">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="cart_btn">
                <button>-</button>
                <p>{item.qty}</p>
                <button>+</button>
              </div>
            </div>
          ))}
        </div>
        <div className="txt_box">
          <h3>Total Amount</h3>
          <p>$ {cartCtx.totalAmount}</p>
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
