import React,{useContext} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import { globleInfo } from "../../../App";

const Header = ({ cart, isLogin ,setIsLogin}) => {
  const {loginState}=useContext(globleInfo)
  console.log("loginState");
  console.log(loginState);
  const navigate = useNavigate()
  const handleLogOut = (e) => {
    setIsLogin(false);
    console.log(e);
    navigate("/login");

  };
  return (
    <div>
    <header>
      <nav className="navbar navbar-expand-lg shadow-md py-2 bg-white relative flex items-center w-full justify-between">
        <div className="px-6 w-full flex flex-wrap items-center justify-between">
          <div
            className="navbar-collapse collapse grow items-center"
            id="navbarSupportedContentY"
          >
            <ul className="navbar-nav mr-auto lg:flex lg:flex-row">
              <li className="nav-item">
                <NavLink
                  to="/dashboard"
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/product"
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Product
                </NavLink>
              </li>

              <li className="nav-item mb-2 lg:mb-0">
                <NavLink
                  to="/login"
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Login
                </NavLink>
              </li>
              <li className="nav-item mb-2 lg:mb-0">
                <NavLink
                  to="/cart"
                  className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                  href="#!"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  go to Cart
                </NavLink>
              </li>
              <li className="nav-item mb-2 lg:mb-0">cart Item={cart.length}</li>
              {loginState ? (
                <li className="nav-item">
                  <button
                    onClick={handleLogOut}
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    log out
                  </button>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink
                    to="/register"
                    className="nav-link block pr-2 lg:px-2 py-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
                    href="#!"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    register
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Header;
