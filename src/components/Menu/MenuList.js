import React, { useState, useEffect } from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";
import { firebaseKey } from "../../dev";

const MenuList = () => {
  const [menuData, setMenuData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch(firebaseKey.firebaseUrl + `Meals.json`);
      const data = await res.json();
      setMenuData(Object.values(data));
    };
    getData().catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="menu_list">
      {menuData.map((data) => (
        <MenuItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default MenuList;
