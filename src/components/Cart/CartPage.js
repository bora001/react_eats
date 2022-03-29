import React, { useState, useContext } from "react";
import { CartContext } from "../../store/CartProvider";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import "./CartPage.css";

const CartPage = (props) => {
  const [cartStatus, setCartStatus] = useState("PreOrder");
  const cartCtx = useContext(CartContext);

  return (
    <Modal>
      {cartStatus === "PreOrder" && (
        <PreOrder ctx={cartCtx} modal={props.modal} setStatus={setCartStatus} />
      )}
      {cartStatus === "ConfirmOrder" && (
        <ConfirmOrder
          ctx={cartCtx}
          modal={props.modal}
          setStatus={setCartStatus}
        />
      )}
      {cartStatus === "CompleteOrder" && (
        <CompleteOrder
          ctx={cartCtx}
          modal={props.modal}
          setStatus={setCartStatus}
        />
      )}
    </Modal>
  );
};

export default CartPage;
