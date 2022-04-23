import React, { useState, useRef } from "react";
import { firebaseKey } from "../../dev";
import OrderDraft from "../Cart/OrderDraft";
import "./MyOrder.css";

const MyOrder = () => {
  const [orderDesc, setOrderDesc] = useState();
  const [noResult, setNoResult] = useState();
  const orderNumber = useRef();

  const submitE = async (e) => {
    e.preventDefault();
    const key = orderNumber.current.value;
    const res = await fetch(firebaseKey.firebaseUrl + "Orders.json", {
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
            <span>Test order number : -N-v1SuhmUioxoBq48az</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
