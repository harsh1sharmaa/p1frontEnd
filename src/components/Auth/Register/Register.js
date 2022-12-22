import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Otp from "../Otp/Otp";
// import "./.css";

import Button from "react-bootstrap/Button";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [password, setPassword] = useState("");
  const [RePassword, setRePassword] = useState("");
  const [otpModal, setotpModal] = useState(false);
  const [validateOtp, setValidateOtp] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(RePassword);
    fetch("http://localhost:4000/users/register", {
      crossDomain: true,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        password: password,
        RePassword: RePassword,
      }),
    }).then(async (response) => {
      let cachedPostData = await response.json();
      console.log("cachedPostData");
      console.log(cachedPostData);
      // return cachedPostData;
      if (cachedPostData.success === true) {
        setotpModal(true);
      }
    });
    setotpModal(true);
  }

  return (
    <>
      {otpModal ? (
        <Otp handleOtp={setValidateOtp} name={name} email={email} />
      ) : (
        <div   className="md:container md:mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Name</Form.Label>

              <Form.Control
                autoFocus
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>

              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group size="lg" controlId="email">
              <Form.Label>phone</Form.Label>

              <Form.Control
                autoFocus
                type="number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
              <Form.Label>Password</Form.Label>

              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group size="lg" controlId="Repassword">
              <Form.Label>Re Enter Password</Form.Label>

              <Form.Control
                type="password"
                value={RePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
            </Form.Group>

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Register
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default Register;
