import React, { useState } from "react";
import CartPage from "./components/Cart/CartPage";
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
        {modalStatus && <CartPage modal={modalBtn} />}
        {/* {modalStatus && <Cart modal={modalBtn} ctx={cartCtx} />} */}
        <Header modal={modalBtn} />
        <MenuList />
      </CartStore>
    </>
  );
};

export default App;
