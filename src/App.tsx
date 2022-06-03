import React from "react";
import CartPage from "./components/Cart/CartPage";
import LoginPage from "./components/UI/LoginPage";
import RegisterPage from "./components/UI/RegisterPage";
import Header from "./components/Layout/Header";
import MenuList from "./components/Menu/MenuList";
import MyOrder from "./components/MyOrder/MyOrder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useSelector } from "react-redux";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const cartInfo = useAppSelector((state) => state.cart);
  // const cartInfo = useSelector((state) => state.cart);

  return (
    <BrowserRouter>
      <div>
        {/* {cartInfo.modalStatus === "Login" && <LoginPage />}
      {cartInfo.modalStatus === "Register" && <RegisterPage />}
      {cartInfo.modalStatus === "Cart" && <CartPage />}
      {cartInfo.cartStatus && <CartPage />} */}
        <Header />
        {/* <div className="main_box">
        <Routes>
          <Route path="/" element={<MenuList />} exact />
          <Route path="/myorder" element={<MyOrder />} exact />
        </Routes>
      </div> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
