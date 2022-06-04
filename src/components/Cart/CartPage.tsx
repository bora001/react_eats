import React, { useState } from "react";
import Modal from "../UI/Modal";
import PreOrder from "./PreOrder";
import ConfirmOrder from "./ConfirmOrder";
import CompleteOrder from "./CompleteOrder";
import { useAppSelector } from "../../store/hooks";
import { cartItemType, OrderType } from "../../store/cart-slice";

const CartPage = () => {
  const [orderData, setOrderData] = useState<OrderType>();
  const cartInfo = useAppSelector((state) => state.cart);

  return (
    <Modal>
      {cartInfo.cartStatus === "PreOrder" && <PreOrder {...cartInfo} />}
      {cartInfo.cartStatus === "ConfirmOrder" && (
        <ConfirmOrder {...cartInfo} />
        // <ConfirmOrder {...cartInfo} orderDetail={setOrderData} />
      )}
      {cartInfo.cartStatus === "CompleteOrder" && (
        <CompleteOrder {...cartInfo} orderInfo={orderData} />
      )}
    </Modal>
  );
};

export default CartPage;
