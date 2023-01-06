import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Admindashboard.css";
import Sidebar from "./Sidebar/Sidebar";
import Tablegrid from "./Tablegrid/Tablegrid";
import Header from "./Header/Header";

const Admindashboard = ({ isLogin, setIsLogin, role }) => {
  const [orders, setOrders] = useState([]);
  // const [orderStatus, setOrdersStatus] = useState("");
  console.log("userToken",localStorage.getItem('userToken'))
  console.log("userRole",localStorage.getItem('userRole'))
  const location = useLocation();
  const navigate = useNavigate();
  console.log("location.state------");
  console.log(location.state);
  if (location.state == null) {
    console.log("hello");
    navigate("/login");
  }
  const { token } = location.state;
  console.log("token");
  console.log(token);
  const handleLogOut = () => {
    console.log("handleLogOut");
    setIsLogin("");
    navigate("/login");
  };

  useEffect(() => {
    // console.log("useEffect");
    // if (isLogin == "" || role == "" || role == "user") {
    //   navigate("/login");
    // }
    let userToken=localStorage.getItem('userToken');
    let userRole =localStorage.getItem('userRole');
    fetch("http://localhost:4000/admin/orders", {
      method: "GET",
      headers: {
        // 'Content-Type': 'text/plain',
        // 'X-My-Custom-Header': 'value-v',
        Authorization:
          "Bearer " +
          userToken,
      },
    })
      .then((res) => res.json())
      .then((json) => {
        setOrders(json.data);
        console.log(json);
      });
  }, []);

  const handleStatus = (e) => {
    // console.log("handle status");
    // console.log(e.target.value);
    let userToken=localStorage.getItem('userToken')
    console.log("userToken",userToken);
    fetch("http://localhost:4000/admin/updateorderstatus", {
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
        status: e.target.value,
      })
    })
      .then((res) => res.json())
      .then((json) => {
        // setOrders(json.data);
        console.log(json);
      });
  };
  return (
    <div>
     <div> 
      <Header/>
     </div>
      <div className="main-container">
        <div className="container1">
          {" "}
          <Sidebar />
        </div>
        <div className="container2">
          {" "}
          <Tablegrid orders={orders} handleStatus={handleStatus} />
        </div>
      </div>
      <button onClick={handleLogOut}>logout</button>
    </div>
  );
};

export default Admindashboard;
