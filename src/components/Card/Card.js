import React from "react";
import { NavLink } from "react-router-dom";
const Card = ({ item }) => {
  const { title ,image, id} = item;
  return (
    <div className="flex  w-25 p-5" >
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg"
            src={image}
            alt=""
            // style={{height: "70px"}}
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">
            Some quick example text 
          </p>
          <NavLink to={`${id}`} className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">details</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Card;
