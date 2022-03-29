import React, { useState } from "react";
import CartPage from "./components/Cart/CartPage";
import Header from "./components/Layout/Header";
import MenuList from "./components/Menu/MenuList";
import MyOrder from "./components/MyOrder/MyOrder";
import CartStore from "./store/CartProvider";

const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const [checkOrder, setCheckOrder] = useState(false);

  const modalBtn = (e) => {
    setModalStatus(e.target.value);
  };
  const myOrderBtn = (e) => {
    setCheckOrder(e.target.value);
  };
  return (
    <>
      <CartStore>
        {modalStatus && <CartPage modal={modalBtn} />}
        <Header modal={modalBtn} myorder={myOrderBtn} />
        <div className="main_box">
          {!checkOrder && <MenuList />}
          {checkOrder && <MyOrder />}
        </div>
      </CartStore>
    </>
  );
};

export default App;
