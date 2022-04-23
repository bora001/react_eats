import React from "react";
import "./PreOrder.css";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const PreOrder = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div className="cart_box">
        <div className="cart_list">
          {props.items.map((item) => (
            <div key={Math.random() * 9} className="cart_item">
              <div className="cart_item_desc">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="cart_btn">
                <button onClick={() => dispatch(cartAction.removeItem(item))}>
                  -
                </button>
                <p>{item.qty}</p>
                <button onClick={() => dispatch(cartAction.addItem(item))}>
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {props.items.length > 0 ? (
        <div className="total_box">
          <h3>Total Amount</h3> <p>$ {props.totalAmount}</p>
        </div>
      ) : (
        <p className="cart_empty">Your cart is Empty</p>
      )}

      <div className="btn_box">
        <button
          className="btn_close"
          onClick={() => dispatch(cartAction.currentCart(""))}
        >
          Close
        </button>
        {props.items.length > 0 && (
          <button
            onClick={() => dispatch(cartAction.currentCart("ConfirmOrder"))}
          >
            Order
          </button>
        )}
      </div>
    </div>
  );
};

export default PreOrder;
