import React from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";

function Auth() {
  return (
    <>
      {/* <Login /> */}
      <Register />
      {/* <BrowserRouter> */}
       {/*  <Routes>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Routes> */}
      {/* </BrowserRouter> */}
    </>
  );
}

export default Auth;
