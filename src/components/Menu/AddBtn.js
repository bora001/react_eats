import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";

const AddBtn = (props) => {
  const dispatch = useDispatch();
  const cartInfo = useSelector((state) => state.cart);
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
