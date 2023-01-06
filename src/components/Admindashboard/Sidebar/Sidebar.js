import React from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBars, FaHome } from "react-icons/fa";
import "../Admindashboard.css";
import { useState } from "react";

const Sidebar = () => {
  const [toggle,setToggle]=useState(true);
  return (
    <>
      <motion.div style={{ width: toggle ? "320px" : "100px"}}>
        {/* <div className="logo">
          <h1>LOGO</h1>
        </div> */}
        {/* <div className="bar">
          <FaBars/>
        </div> */}
        <div className="sidebar">
          <NavLink className="navbar-nav" to="createProduct">
            <div className="icon">
              <FaHome />
            </div>
            <div className="icon-text" >side 1 createProduct</div>
          </NavLink>
        </div>
        <div className="sidebar">
          <NavLink className="navbar-nav" to="product">
            <div  className="icon" >
              <FaHome />
            </div>
            <div className="icon-text" >update Product</div>
          </NavLink>
        </div>
        <div className="sidebar">
          <NavLink className="navbar-nav" to="/applyleave">
            <div  className="icon" >
              <FaHome />
            </div>
            <div className="icon-text">side 3</div>
          </NavLink>
        </div>
        <div className="sidebar">
          <NavLink className="navbar-nav" to="/feed">
            <div  className="icon" >
              <FaHome />
            </div>
            <div className="icon-text" >side 4</div>
          </NavLink>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
