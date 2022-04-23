import React, { useState } from "react";
import CartPage from "./components/Cart/CartPage";
import LoginPage from "./components/UI/LoginPage";
import RegisterPage from "./components/UI/RegisterPage";
import Header from "./components/Layout/Header";
import MenuList from "./components/Menu/MenuList";
import MyOrder from "./components/MyOrder/MyOrder";
import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
const App = () => {
  // const [modalStatus, setModalStatus] = useState(false);
  const [checkOrder, setCheckOrder] = useState(false);
  const cartInfo = useSelector((state) => state.cart);
  // const modalBtn = (e) => {
  //   setModalStatus(e.target.value);
  // };
  const myOrderBtn = (e) => {
    setCheckOrder(e.target.value);
  };
  return (
    <BrowserRouter>
      {cartInfo.modalStatus === "Login" && <LoginPage />}
      {cartInfo.modalStatus === "Register" && <RegisterPage />}
      {cartInfo.modalStatus === "Cart" && <CartPage />}
      {/* {modalStatus && <CartPage modal={modalBtn} />} */}
      {/* <Header modal={modalBtn} myorder={myOrderBtn} /> */}
      <Header myorder={myOrderBtn} />
      <div className="main_box">
        {!checkOrder && <MenuList />}
        {checkOrder && <MyOrder />}
      </div>
    </BrowserRouter>
  );
};

export default App;
