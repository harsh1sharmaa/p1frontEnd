import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Tablerow from "./Tablerow";
import './Listproduct.css';

const Listproduct = ({ product }) => {
  const navigate = useNavigate();
  //   console.log(product);
  const [products, setProduct] = useState([]);
  useEffect(() => {
    let userToken = localStorage.getItem("userToken");
    let userRole = localStorage.getItem("userRole");
    console.log(userToken);
    console.log(userRole);
    if (userToken == undefined) {
      navigate("/login");
    }
    if (userRole == "user") {
      navigate("/notaccess");
    }

    fetch("http://localhost:4000/store/products", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + userToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        if (json.success) {
          setProduct(json.data);
          console.log("product", json.data);
        } else {
          //set error
        }
      });
  }, []);
  return (
    
    <div className="Table">
      <table className="table-auto">
        <thead>
          <tr>
            <th>index</th>
            <th>description</th>
            <th>discountPercentage</th>
            <th>price</th>
            <th>stock</th>
            <th>edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => {
            return <Tablerow idx={idx} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Listproduct;
