import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import MenuList from "./components/Menu/MenuList";
const App = () => {
  const [modalStatus, setModalStatus] = useState(false);
  const modalBtn = (e) => {
    setModalStatus(e.target.value);
  };
  return (
    <div>
      {modalStatus && <Cart modal={modalBtn} />}
      <Header modal={modalBtn} />
      <MenuList />
    </div>
  );
};

export default App;
