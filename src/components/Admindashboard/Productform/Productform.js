import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Productform = () => {
  const [productName, setProductname] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleCreateProduct = () => {
    console.log(productName);
    console.log(category);
    console.log(price);
    console.log(image);

    let userToken=localStorage.getItem('userToken')
    console.log("userToken",userToken);
    fetch("http://localhost:4000/store/products", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // 'X-My-Custom-Header': 'value-v',
        Authorization:
          "Bearer " +
          userToken,
      },
      body:JSON.stringify( {
        orderId: "WI4To",
        userId: "4784Ns17o309gI",
        status: "",
      })
    })
      .then((res) => res.json())
      .then((json) => {
        // setOrders(json.data);
        console.log(json);
      });
  };

  useEffect(() => {
    // console.log("useEffect");
    // if (isLogin == "" || role == "" || role == "user") {
    //   navigate("/login");
    // }
    let userToken = localStorage.getItem("userToken");
    let userRole = localStorage.getItem("userRole");
    console.log(userToken);
    console.log(userRole);
    if (userToken == undefined ) {
      navigate("/login");
    }
    if(userRole == "user") {
      navigate("/notaccess")
    }
  }, []);

 


  return (
    <div>
      <div>
        <div>
          <label>
            Enter product name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductname(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter product category:
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Enter product price:
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            file image:
            <input
              type="file"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>
        </div>
      </div>
      <button onClick={handleCreateProduct}>create Product</button>
    </div>
  );
};

export default Productform;
