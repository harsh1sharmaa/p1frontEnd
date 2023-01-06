import userEvent from "@testing-library/user-event";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loder from "../Loder/Loder";
import { NavLink } from "react-router-dom";
const Detail = ({ cart, setCart }) => {
  const params = useParams();
  console.log(params.id);

  const [product, setProduct] = useState(false);
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked $} times`;
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      });
  }, []);

  const handleAddToCart = () => {
    console.log("call");
    var id;
    let newCart;
     cart.forEach(function (item, index) {
      console.log("rrrrrr");
      console.log(product);
      if (item.id ===product.id){
        id=item.id;
      }
    });
    console.log("id")
    console.log(id);
    if (id !== undefined) {
      cart.forEach(function (item, index) {
        console.log(item, index);
        if (item.id === id) item.quantity += 1;
      });
      newCart = [...cart];
    } else {
      newCart = [...cart, { ...product, quantity: 1 }];
    }
    console.log(newCart);

    setCart(newCart);
  };

  return !product ? (
    <Loder />
  ) : (
    <div className="overflow-hidden shadow-lg m-4 w-25">
      <img
        className="w-full"
        // src="https://v1.tailwindcss.com/img/card-top.jpg"
        src={product.image}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <button className="rounded-full bg-red" onClick={handleAddToCart}>
          add to cart
        </button>
      </div>
      <div className="px-6 pt-4 pb-2">
      <NavLink
                  to="/cart"
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  go to Cart
                </NavLink>
      </div>
    </div>
  );
};

export default Detail;
