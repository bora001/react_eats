import React from "react";
import { cartAction } from "../../store/cart-slice";
import { cartItemType } from "../../store/cart-slice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const AddBtn = (props: { data: cartItemType }) => {
  const dispatch = useAppDispatch();
  const cartInfo = useAppSelector((state) => state.cart);
  const addItem = () => {
    if (cartInfo.userUid) {
      dispatch(cartAction.addItem(props.data));
    } else {
      dispatch(cartAction.currentModal("Login"));
    }
  };

  return (
    <div className="add_btn">
      <button onClick={addItem}>+ ADD</button>
    </div>
  );
};

export default AddBtn;
