import React, { useRef, useState } from "react";
import "./style.css";
import { IonIcon } from "@ionic/react";
import {
  closeOutline,
  menuOutline,
  logoInstagram,
  logoFacebook,
  logoTwitter,
} from "ionicons/icons";
import { Link, useNavigate } from "react-router-dom";
import Validation from "./SignupValidation";
import axios from "axios";

export default function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    if (errors.name === "" && errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <header className="sign-header">
        <h1 className="nav-title">
          <span className="dar"> Dar</span> <br />
          <span className="nour">Nour</span>
        </h1>

        {/* <!-- Login form --> */}
        <div className="container-popup sign-container" id="container">
          <div className="form-container sign-in-container" id="login-form">
            <form action="" onSubmit={handleSubmit}>
              <h1 className="account-head">Sign up</h1>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                onChange={handleInput}
              ></input>
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
              <input
                type="email"
                placeholder="Your e-mail address"
                name="email"
                onChange={handleInput}
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
              <input
                type="password"
                placeholder="Your password"
                name="password"
                onChange={handleInput}
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
              <input type="submit" value="Sign up" className="popup-btn" />
              <p className="input-para">
                Already have an account?
                <Link
                  to="/"
                  href="#"
                  id="show-register-form"
                  className="input-link"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </header>
    </>
  );
}
