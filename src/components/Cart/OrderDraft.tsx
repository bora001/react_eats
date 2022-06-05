import React from "react";
import "./OrderDraft.css";
import { OrderType } from "../../store/cart-slice";

const OrderDraft = (props: { orderInfo: OrderType | undefined }) => {
  return (
    <div className="order_draft">
      <div className="desc_box">
        <div className="order_info">
          <h4>Order Info</h4>
          <p>Order date : {props.orderInfo!.time}</p>
          <p>Order name : {props.orderInfo!.name}</p>
          <p>Deliver To : {props.orderInfo!.address}</p>
          <p>Contact : {props.orderInfo!.contact}</p>
          {props.orderInfo?.msg && <p>Message : {props.orderInfo.msg}</p>}
        </div>
        <div className="order_item">
          <h4>Order Item</h4>
          {props.orderInfo!.item &&
            props.orderInfo!.item.map((orderitem) => {
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
        <p>$ {props.orderInfo!.totalAmount}</p>
      </div>
    </div>
  );
};

export default OrderDraft;
