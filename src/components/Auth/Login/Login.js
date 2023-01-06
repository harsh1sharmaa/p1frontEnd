import React, { useContext, useEffect, useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Loder from "../../Loder/Loder";
import {
  saveTokenLocalStorage,
  saveRoleLocalStorage,
} from "../Localstore/Localstore";

import Form from "react-bootstrap/Form";
import "./Login.css";

import Button from "react-bootstrap/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase";

function Login({ isLogin, setIsLogin, role, setRole }) {
  const { state } = useLocation();
  console.log("props in login ");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loder, setLoder] = useState(false);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  const navigate = useNavigate();
  function handleSubmit(event) {
    event.preventDefault();

    setLoder(true);
    fetch("http://localhost:4000/users/login", {
      crossDomain: true,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).then(async (response) => {
      let cachedPostData = await response.json();
      console.log("cachedPostData");
      console.log(cachedPostData);
      // return cachedPostData;
      if (cachedPostData.success === true) {
        // setotpModal(true);
        if (cachedPostData.data.role == "admin") {
          setRole("admin");
          setIsLogin(cachedPostData.data.token);
          saveTokenLocalStorage(cachedPostData.data.token);
          saveRoleLocalStorage(cachedPostData.data.role);
          navigate("/admin/dashboard", {
            state: { token: cachedPostData.data.token },
          });
        } else {
          setRole("user");
          setIsLogin(cachedPostData.data.token);
          saveTokenLocalStorage(cachedPostData.data.token);
          saveRoleLocalStorage(cachedPostData.data.role);
          navigate("/dashboard", {
            state: { token: cachedPostData.data.token },
          });
        }
      } else {
        setLoder(false);
        setError(cachedPostData.message);
      }
    });

    // console.log(email);
    //-----------------------firebase Code start
    /*   signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        const User=res.user;
        let token=User.accessToken
        let image=User.photoURL
          navigate("/dashboard", { state: { token:token ,userImage:image} });
      })
      .catch((err) => {
        console.log(err);
      }); */

    //-----------------------firebase Code End
    // setTimeout(() => {
    //   setIsLogin("eyterty4356yt4e78u56tu");
    // }, 3000);
  }

  useEffect(() => {
    console.log(state, isLogin);
    if (isLogin) {
      if (role == "admin") {
        navigate("/admin/dashboard", { state: { token: isLogin } });
      } else {
        navigate("/dashboard", { state: { token: isLogin } });
      }
    }
  }, []);

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
            <div>{error ?? <h2 className="error">{error}</h2>}</div>

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
