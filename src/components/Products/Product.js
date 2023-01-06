import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Loder from "../Loder/Loder";
// import Loder from "../../Loder/Loder";

const Product = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    // Update the document title using the browser API
    // document.title = `You clicked $} times`;
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      });
  }, []);
  return !products.length ? (
    <Loder />
  ) : (
    <div className="flex">
      {products.map((item, i) => 
        <Card key={i} item={item} />
    )}
    </div>
  );
};

export default Product;
