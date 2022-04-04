import React from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const AddBtn = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="add_btn">
      <button onClick={() => dispatch(cartAction.addItem(props.data))}>
        + ADD
      </button>
    </div>
  );
};

export default AddBtn;
