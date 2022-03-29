import React, { useState, useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import "./CartPage.css";

const CartPage = (props) => {
  const [cartStatus, setCartStatus] = useState("PreOrder");
  const [orderData, setOrderData] = useState({});
  const cartCtx = useContext(CartContext);
  const passData = {
    ctx: cartCtx,
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
