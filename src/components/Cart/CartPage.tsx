import React, { useState } from "react";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import { useAppSelector } from "../../store/hooks";
import { OrderType } from "../../store/cart-slice";

const CartPage = () => {
  const [orderData, setOrderData] = useState<OrderType>();
  const cartInfo = useAppSelector((state) => state.cart);
  return (
    <Modal>
      {cartInfo.cartStatus === "PreOrder" && <PreOrder {...cartInfo} />}
      {cartInfo.cartStatus === "ConfirmOrder" && (
        <ConfirmOrder orderDetail={setOrderData} />
      )}
      {cartInfo.cartStatus === "CompleteOrder" && (
        <CompleteOrder orderInfo={orderData} />
      )}
    </Modal>
  );
};

export default CartPage;
