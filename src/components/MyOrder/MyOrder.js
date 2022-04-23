import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import { useSelector } from "react-redux";
import OrderDraft from "../Cart/OrderDraft";
import "./MyOrder.css";

const MyOrder = () => {
  const [orderList, setOrderList] = useState([]);
  const cartInfo = useSelector((state) => state.cart);
  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, "Order/" + cartInfo.userUid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setOrderList(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="myorder">
      <div className="myorder_inner">
        {orderList.length > 0 &&
          orderList.map((item) => (
            <OrderDraft
              orderInfo={item}
              key={Math.random().toString(36).slice(2)}
            />
          ))}
        {orderList.length < 1 && <div className="no_order">No order found</div>}
      </div>
    </div>
  );
};

export default MyOrder;
