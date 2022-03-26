import React from "react";
import MenuItem from "./MenuItem";
import "./MenuList.css";

const dummy = [
  {
    id: "m1",
    name: "Sushi",
    desc: "salmon and avocado",
    price: 10,
    qty: 1,
  },
  {
    id: "m2",
    name: "Pizza",
    desc: "cheese and bulgogi",
    price: 15,
    qty: 1,
  },
  {
    id: "m3",
    name: "Pasta",
    desc: "Tomato and shrimp",
    price: 12,
    qty: 1,
  },
  {
    id: "m4",
    name: "Juice",
    desc: "Apple Juice",
    price: 3,
    qty: 1,
  },
];

const MenuList = () => {
  return (
    <div className="menu_list">
      {dummy.map((data) => (
        <MenuItem data={data} key={data.id} />
      ))}
    </div>
  );
};

export default MenuList;
