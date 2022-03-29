import React, { useState, useRef } from "react";
import { firebaseUrl } from "../../dev";
import OrderDraft from "../Cart/OrderDraft";
import "./MyOrder.css";

const MyOrder = () => {
  const [orderDesc, setOrderDesc] = useState();
  const [noResult, setNoResult] = useState();
  const orderNumber = useRef();

  const submitE = async (e) => {
    e.preventDefault();
    const key = orderNumber.current.value;
    const res = await fetch(firebaseUrl + "Orders.json", {
      method: "GET",
    });
    const data = await res.json();
    orderNumber.current.value = "";
    setOrderDesc(data[key]);
    setNoResult(!data[key]);
  };
  return (
    <div className="myorder">
      <div className="myorder_inner">
        <form onSubmit={submitE}>
          <h2>My Order</h2>
          <div className="input_box">
            <input
              type="text"
              ref={orderNumber}
              placeholder="Enter your order number"
              required
            />
            <button>Check</button>
          </div>
        </form>
        {orderDesc && <OrderDraft orderInfo={orderDesc} />}
        {noResult && (
          <div className="no_result">
            <h4> No results Found</h4>
            <p> Some order number starts with '-'</p>
            <span>Test order number: -MzJNnAggcG23bCjfw3z</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
