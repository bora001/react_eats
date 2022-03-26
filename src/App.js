import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MenuList from "./components/Menu/MenuList";
import CartStore from "./store/CartProvider";

const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const modalBtn = (e) => {
    setModalStatus(e.target.value);
  };
  return (
    <>
      <CartStore>
        {modalStatus && <Cart modal={modalBtn} />}
        <Header modal={modalBtn} />
        <MenuList />
      </CartStore>
    </>
  );
};

export default App;
