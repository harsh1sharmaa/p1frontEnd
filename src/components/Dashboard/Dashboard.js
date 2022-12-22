import React from "react";
import Header from "./Header/Header"
import { useLocation } from "react-router-dom";
const Dashboard = () => {
  const location = useLocation()
  console.log("location.state------")
  console.log(location.state)
  const { token } = location.state
  console.log("token----")
  console.log(token)
  return (
    <div>
        <Header></Header>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Dashboard;
