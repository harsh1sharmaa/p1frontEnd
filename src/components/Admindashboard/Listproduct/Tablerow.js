import React from "react";
import { useState } from "react";

const Tablerow = ({ idx, product }) => {

  const [discountPercent,setDiscountPercent]=useState(product.discountPercentage);
  const [price,setPrice]=useState(product.price);
  const [stock,setStock]=useState(product.stock);
  const [productId,setProductId]=useState(product.id);
  const [editbtn,seteditbtn]=useState(true);

  const handleEdit=() => {
    console.log("handle edit")
    seteditbtn(!editbtn);

  }
  const handleUpdate=() => {
    console.log("handle update")
    console.log(discountPercent)
    console.log(price)
    console.log(stock)
    // update product 
    let userToken=localStorage.getItem('userToken')
    console.log("userToken",userToken);
    fetch("http://localhost:4000/admin/updateproduct", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-My-Custom-Header': 'value-v',
        Authorization:
          "Bearer " +
          userToken,
      },
      body:JSON.stringify( {
        productId:productId,
        price:price,
        stock:stock,
        discountPercent:discountPercent,
      })
    })
      .then((res) => res.json())
      .then((json) => {
        // setOrders(json.data);
        console.log(json);
      });


    seteditbtn(!editbtn);
  }
  return (
    <tr className="tablerow">
      <td className="td-1">{idx}</td>
      <td className="td-2">{product.description}</td>
      <td className="td-3">{product.discountPercentage} <input className="tr-input" type={!editbtn ? "number" :"hidden"} visible={!editbtn} value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} /></td>
      <td className="td-4">{product.price} <input  className="tr-input" type={!editbtn ? "number" :"hidden"} visible={!editbtn} value={price} onChange={(e) => setPrice(e.target.value)} /> </td>
      <td className="td-5">{product.stock} <input  className="tr-input" type={!editbtn ? "number" :"hidden"} visible={!editbtn} value={stock}  onChange={(e) => setStock(e.target.value)} /></td>
      {/* <td className="td-5">edit</td> */}
      <button className="btn td-5" disabled={!editbtn} onClick={handleEdit}>edit</button>
      <button className="btn td-5" disabled={editbtn} onClick={handleUpdate}>update</button>
      
    </tr>
  );
};

export default Tablerow;
