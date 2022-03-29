import React from "react";
import "./CompleteOrder.css";

const CompleteOrder = (props) => {
  console.log(props, "complete");
  return (
    <div>
      <div className="txt_box">
        <h3>Thank you for your order!</h3>
        <p>your order number is</p>
        <span> {props.orderInfo.id} </span>
      </div>
      <div className="desc_box">
        <div className="order_info">
          <h4>Order Info</h4>
          <p>Order date : {props.orderInfo.time}</p>
          <p>Order name : {props.orderInfo.name}</p>
          <p>Deliver To : {props.orderInfo.address}</p>
          <p>Contact : {props.orderInfo.contact}</p>
          {props.orderInfo.msg && <p>Message : {props.orderInfo.msg}</p>}
        </div>
        <div className="order_item">
          <h4>Order Item</h4>
          {props.orderInfo.item.map((orderitem) => {
            return (
              <div key={Math.random() * 9} className="item_desc">
                <p>
                  Order Item : {orderitem.name} x {orderitem.qty}
                </p>
                <p>Order Price : ${orderitem.price * orderitem.qty}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="total_box">
        <h4>Total Amount</h4>
        <p>$ {props.ctx.totalAmount}</p>
      </div>
      <div className="btn_box">
        <button className="btn_close" onClick={props.modal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
