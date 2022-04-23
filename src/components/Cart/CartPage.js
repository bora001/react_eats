import React, { useState } from "react";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import { useSelector } from "react-redux";
const CartPage = (props) => {
  const [orderData, setOrderData] = useState({});
  const cartInfo = useSelector((state) => state.cart);

  return (
    <Modal>
      {cartInfo.cartStatus === "PreOrder" && <PreOrder {...cartInfo} />}
      {cartInfo.cartStatus === "ConfirmOrder" && (
        <ConfirmOrder {...cartInfo} orderDetail={setOrderData} />
      )}
      {cartInfo.cartStatus === "CompleteOrder" && (
        <CompleteOrder {...cartInfo} orderInfo={orderData} />
      )}
    </Modal>
  );
};

export default CartPage;
