import React from "react";
import OrderDraft from "./OrderDraft";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { OrderType } from "../../store/cart-slice";
import "./CompleteOrder.css";

const CompleteOrder = (props: { orderInfo: OrderType | undefined }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="txt_box">
        <h3>Thank you for your order!</h3>
        <p>your order number is</p>
        <span>{props.orderInfo!.id}</span>
      </div>
      <OrderDraft orderInfo={props.orderInfo} />
      <div className="btn_box">
        <button
          className="btn_close"
          onClick={() => dispatch(cartAction.currentCart(""))}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CompleteOrder;
