import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loder from "../../Loder/Loder";

import Form from "react-bootstrap/Form";
import "./Login.css";

import Button from "react-bootstrap/Button";

function Login(props) {
  const { state } = useLocation();
  console.log("props in login ");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [loder, setLoder] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    console.log(email);
    setLoder(true);
    setTimeout(() => {
      navigate("/dashboard", { state: { token: "eyterty4356yt4e78u56tu" } });
    }, 3000);
  }

  return (
    <>
      {loder ? (
        <Loder />
      ) : (
        <div className="Login">
          <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
              <Form.Label>Email</Form.Label>

              <Form.Control
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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

            <Button block size="lg" type="submit" disabled={!validateForm()}>
              Login
            </Button>
          </Form>
        </div>
      )}
    </>
  );
}

export default Login;
