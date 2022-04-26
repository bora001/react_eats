import React, { useState, useEffect } from "react";
import { getDatabase, ref, child, get, remove } from "firebase/database";
import { useSelector } from "react-redux";
import OrderDraft from "../Cart/OrderDraft";
import "./MyOrder.css";

const MyOrder = () => {
  const [orderList, setOrderList] = useState([]);
  const cartInfo = useSelector((state) => state.cart);

  useEffect(() => {
    getData();
  }, [orderList.length]);

  const getData = () => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, "Order/" + cartInfo.userUid))
      .then((snapshot) => {
        if (snapshot.exists()) {
          let data = snapshot.val();
          setOrderList(Object.entries(data));
        } else {
          setOrderList([]);
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const cancelOrder = (e) => {
    const db = getDatabase();
    const confirm = window.confirm("Are you sure that you delete this order?");
    if (confirm) {
      remove(ref(db, "Order/" + cartInfo.userUid + "/" + e));
      getData();
    }
  };
  return (
    <div className="myorder">
      <div className="myorder_inner">
        {orderList.length > 0 &&
          orderList.map((item) => (
            <div className="orderdraft_box" key={item[0]}>
              <OrderDraft orderInfo={item[1]} />
              <button className="btn_del" onClick={() => cancelOrder(item[0])}>
                Cancel Order
              </button>
            </div>
          ))}
        {orderList.length < 1 && <div className="no_order">No order found</div>}
      </div>
    </div>
  );
};

export default MyOrder;
