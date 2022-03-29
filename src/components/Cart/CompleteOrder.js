import React from "react";
import OrderDraft from "./OrderDraft";
import "./CompleteOrder.css";

const CompleteOrder = (props) => {
  console.log(props);
  return (
    <div>
      <div className="txt_box">
        <h3>Thank you for your order!</h3>
        <p>your order number is</p>
        <span> {props.orderInfo.id} </span>
      </div>
      <OrderDraft orderInfo={props.orderInfo} />
      <div className="btn_box">
        <button className="btn_close" onClick={props.modal}>
          Close
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
