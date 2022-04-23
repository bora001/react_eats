import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./RegisterPage.css";
const RegisterPage = () => {
  const ref = useRef();
  const [registerInfo, setRegisterInfo] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const getData = (e) => {
    const { name, value } = e.target;
    setRegisterInfo({ ...registerInfo, [name]: value });
  };
  const registerUser = (e) => {
    e.preventDefault();
    if (registerInfo.password == registerInfo.password_check) {
      console.log("same");
      saveOnFirebase();
    } else {
      alert("Incorrect Password");
      ref.current.reset();
    }
  };

  const saveOnFirebase = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerInfo.email,
        registerInfo.password
      );
      if (user) {
        dispatch(cartAction.currentModal(""));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal>
      <form className="register_form" onSubmit={registerUser} ref={ref}>
        <h2>Register</h2>
        <div className="input_box">
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={getData} />
        </div>
        <div className="input_box">
          <label htmlFor="">password</label>
          <input
            type="password"
            name="password"
            onChange={getData}
            autoComplete="off"
          />
        </div>
        <div className="input_box">
          <label htmlFor="">Password check</label>
          <input
            type="password"
            name="password_check"
            onChange={getData}
            autoComplete="off"
          />
        </div>
        <div className="btn_box">
          <button
            className="btn_close"
            onClick={() => dispatch(cartAction.currentModal(""))}
          >
            Close
          </button>
          <button>Register</button>
        </div>
      </form>
    </Modal>
  );
};

export default RegisterPage;
