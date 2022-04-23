import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
const LoginPage = () => {
  const dispatch = useDispatch();
  return (
    <Modal>
      LoginPage
      <div className="btn_box">
        <button
          className="btn_close"
          onClick={() => dispatch(cartAction.currentModal(""))}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default LoginPage;
