import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import User from "./components/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login/Login"
import Dashboard from "./components/Dashboard/Dashboard";
import Products from "./components/Products/Product";

import Auth from "./components/Auth";

function App() {
  return (
    <div className="App">
      {/* <Auth /> */}
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/register" element={<Auth />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/product" element={<Products/>} />
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
