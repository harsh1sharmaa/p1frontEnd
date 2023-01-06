import React from "react";
import Header from "./Header/Header";
import { useLocation } from "react-router-dom";
const Dashboard = ({ cart }) => {
  const location = useLocation();
  console.log("location.state------");
  console.log(location.state);
  const { token, userImage } = location.state;
  console.log("token----");
  console.log(userImage);
  return (
    <div>
      {/* <Header cart={cart}></Header> */}
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <img
            className="rounded-t-lg"
            src={userImage}
            alt=""
            // style={{height: "70px"}}
          />
    </div>
  );
};

export default Dashboard;
