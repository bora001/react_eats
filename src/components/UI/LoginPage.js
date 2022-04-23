import React, { useState, useRef } from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { cartAction } from "../../store/cart-slice";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { auth } from "../../firebase-config";
import "./LoginPage.css";

const LoginPage = () => {
  const authInfo = getAuth();
  const dispatch = useDispatch();
  const ref = useRef();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  const getData = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };
  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginInfo.email,
        loginInfo.password
      );

      if (user) {
        const userUid = authInfo.currentUser.uid;
        dispatch(cartAction.currentModal(""));
        dispatch(cartAction.userLogin(userUid));
      }
    } catch (err) {
      console.log(err);
    }
    ref.current.reset();
  };

  return (
    <Modal>
      <form className="login_form" onSubmit={loginUser} ref={ref}>
        <h2>Login</h2>
        <div className="input_box">
          <label htmlFor="">Email</label>
          <input type="text" name="email" onChange={getData} />
        </div>
        <div className="input_box">
          <label htmlFor="">password</label>
          <input type="password" name="password" onChange={getData} />
        </div>

        <div className="btn_box">
          <button
            className="btn_close"
            onClick={() => dispatch(cartAction.currentModal(""))}
          >
            Close
          </button>
          <button>Login</button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginPage;
