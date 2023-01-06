import React, { useState } from "react";

const Tablerow = ({ order, handleStatus }) => {
  const [status, setStatus] = useState(order.status);

  const handleStatus2 = (e) => {
    console.log(e);
    console.log("handle statu2");
    console.log(e.target.value);
    let userToken=localStorage.getItem('userToken')
    fetch("http://localhost:4000/admin/updateorderstatus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'X-My-Custom-Header': 'value-v',
        Authorization:
          "Bearer " +
          userToken,
      },
      body: JSON.stringify({
        orderId: order.id,
        userId: order.userId,
        status: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setStatus(e.target.value);
        console.log(json);
      });
  };
  return (
    <tr>
      <td>{order.userEmail}</td>
      <td>{order.userId}</td>
      <td>{order.totelPrice}</td>
      <td>
        <select defaultValue={status} onChange={handleStatus2}>
          <option value="pending">pending</option>
          <option value="fullfill">fullfill</option>
        </select>
      </td>
      {/* <td>Malcolm Lockyer</td>
            <td>1961</td> */}
    </tr>
  );
};

export default Tablerow;
