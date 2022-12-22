import React from "react";

const Table = ({ item,increment,decrement }) => {
  console.log(item);

  return (
    <>
      <tr>
        <td className="h-30 w-10">
          <img
            className="object-contain h-25 w-25"
            src={item.image}
            alt=""
            // style={{height: "70px"}}
          />
        </td>
        <td>{item.quantity}</td>
        <td>
            <button id={item.id} onClick={increment} className="p-4">+</button>
            <button id={item.id} onClick={decrement} className="p-4">-</button>
        </td>
        <td>{item.price * item.quantity}</td>
      </tr>
    </>
  );
};

export default Table;
