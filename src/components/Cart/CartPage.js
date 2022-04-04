import React, { useState } from "react";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import { useSelector } from "react-redux";

const CartPage = (props) => {
  const [cartStatus, setCartStatus] = useState("PreOrder");
  const [orderData, setOrderData] = useState({});
  const cartInfo = useSelector((state) => state.cart);
  const passData = {
    ctx: cartInfo,
    modal: props.modal,
    setStatus: setCartStatus,
  };

  return (
    <Modal>
      {cartStatus === "PreOrder" && <PreOrder {...passData} />}
      {cartStatus === "ConfirmOrder" && (
        <ConfirmOrder {...passData} orderDetail={setOrderData} />
      )}
      {cartStatus === "CompleteOrder" && (
        <CompleteOrder {...passData} orderInfo={orderData} />
      )}
    </Modal>
  );
};

export default CartPage;
