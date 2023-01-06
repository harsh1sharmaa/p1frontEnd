import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Product";
import { useState, createContext } from "react";

import Auth from "./components/Auth";
import Detail from "./components/Detail/Detail";
import Header from "./components/Dashboard/Header/Header";
import Cart from "./components/Cart/Cart";
import Order from "./components/Order/Order";
import Admindashboard from "./components/Admindashboard/Admindashboard";
import Productform from "./components/Admindashboard/Productform/Productform";
import Listproduct from "./components/Admindashboard/Listproduct/Listproduct";

export const globleInfo = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState("");
  const [role, setRole] = useState("");
  return (
    <div className="App">
      {/* <Auth /> */}
      <globleInfo.Provider value={{ loginState: isLogin }}>
        <BrowserRouter>
          {/* <Navbar /> */}
          {(role == "user" || role == "") ?? (
            <Header cart={cart} isLogin={isLogin} setIsLogin={setIsLogin} />
          )}
          {/* <Header cart={cart} isLogin={isLogin} setIsLogin={setIsLogin} /> */}
          <Routes>
            <Route path="/register" element={<Auth isLogin={isLogin} />} />
            <Route
              path="/login"
              element={
                <Login
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  role={role}
                  setRole={setRole}
                />
              }
            />
            <Route
              path="/dashboard"
              element={<Dashboard isLogin={isLogin} cart={cart} />}
            />
            <Route
              path="/admin/dashboard"
              element={
                <Admindashboard
                  role={role}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
              }
            >
            </Route>
              <Route path="/admin/dashboard/createProduct" element={<Productform/>} />
            <Route path="/product" element={<Products />} />
            <Route path="/admin/dashboard/product" element={<Listproduct/>} />
            <Route
              path="/cart"
              element={<Cart isLogin={isLogin} setCart={setCart} cart={cart} />}
            />
            <Route
              path="/cart/placeOrder"
              element={<Order isLogin={isLogin} />}
            />
            <Route
              path="/product/:id"
              element={<Detail cart={cart} setCart={setCart} />}
            />
            {/* <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:name" element={<User />} />
          <Route path="/*" element={<Page404 />} /> */}
            {/* <Route> path="/about" elements={<About/>}</Route> */}
          </Routes>
        </BrowserRouter>
      </globleInfo.Provider>
    </div>
  );
}

export default App;
