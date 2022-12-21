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
import { useState } from "react";

import Auth from "./components/Auth";
import Detail from "./components/Detail/Detail";
import Header from "./components/Dashboard/Header/Header";
import Cart from "./components/Cart/Cart";

function App() {
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      {/* <Auth /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Header cart={cart} />
        <Routes>
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/product" element={<Products />} />
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
    </div>
  );
}

export default App;
