import React from "react";
import "./PreOrder.css";
const PreOrder = (props) => {
  console.log(props, "preore!");
  const orderProcess = () => {
    props.setStatus("ConfirmOrder");
  };
  return (
    <div>
      <div className="cart_box">
        <div className="cart_list">
          {props.ctx.items.map((item) => (
            <div key={Math.random() * 9} className="cart_item">
              <div className="cart_item_desc">
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>
              <div className="cart_btn">
                <button onClick={() => props.ctx.removeItem(item)}>-</button>
                <p>{item.qty}</p>
                <button onClick={() => props.ctx.addItem(item)}>+</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="total_box">
        <h3>Total Amount</h3>
        <p>$ {props.ctx.totalAmount}</p>
      </div>
      <div className="btn_box">
        <button className="btn_close" onClick={props.modal}>
          Close
        </button>
        {props.ctx.items.length > 0 && (
          <button onClick={orderProcess}>Order</button>
        )}
      </div>
    </div>
  );
};

export default PreOrder;
