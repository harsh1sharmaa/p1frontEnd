import React, { useState } from "react";
import Table from "./Table/Table";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";



const Cart = ({ setCart, cart }) => {
  const [totelPtice, setTotelPrice] = useState(0);
  const increment = (e) => {
    var sum = 0;
    console.log(e.target.id);
    cart.forEach((element) => {
      if (element.id == e.target.id) {
        element.quantity = element.quantity + 1;
      }
      sum =sum+ element.quantity * element.price;
    });
    setTotelPrice(sum);
    setCart([...cart]);
  };
  const decrement = (e) => {
    console.log(e.target.id);
    var sum = 0;
    cart.forEach((element) => {
      if (element.id == e.target.id) {
        if (element.quantity > 0) {
          element.quantity = element.quantity - 1;
        }
      }
      sum =sum+ element.quantity * element.price;
    });
    setTotelPrice(sum);

    setCart([...cart]);
  };



  

  return (
    <div className="flex flex-wrap">
      <table className="table-fixed">
        <thead>
          <tr>
            <th className="w-10 p-5">image</th>
            <th className=" w-10 p-5">quantity</th>
            <th className=" w-10 p-5">action</th>
            <th className="w-10 p-5">price</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, i) => {
            return (
              <Table item={item} increment={increment} decrement={decrement} />
            );
          })}
        </tbody>
      </table>
      <div>totel amount : {totelPtice}</div>
      <NavLink to="placeOrder" className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light"  state={{ cart: cart }}>place Order</NavLink>

    </div>
  );
};

export default Cart;
