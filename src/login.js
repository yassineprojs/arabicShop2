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
import Validation from "./LoginValidation";

export default function Login() {
  const navBtn = useRef(null);
  const navbar = useRef(null);
  const navBtnInt = useRef(null);
  const overlay = useRef(null);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

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
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("No record existed");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleNavBtnClick = () => {
    navbar.current.classList.add("open");
    overlay.current.classList.add("open");
  };

  const handleNavBtnIntClick = () => {
    navbar.current.classList.remove("open");
    overlay.current.classList.remove("open");
  };

  const handleOverlayClick = () => {
    navbar.current.classList.remove("open");
    overlay.current.classList.remove("open");
  };

  return (
    <>
      <header>
        <h1 className="nav-title">
          <span className="dar"> Dar</span> <br />
          <span className="nour">Nour</span>
        </h1>
        <div
          className="header-overlay"
          ref={overlay}
          onClick={handleOverlayClick}
        >
          &nbsp;
        </div>
        <div className="navbar" ref={navBtn} onClick={handleNavBtnClick}>
          <div className="nav_toggle">
            <IonIcon icon={menuOutline} className="navbar_nav-btn" />
          </div>
        </div>
        {/* <!-- navbar --> */}
        <div className="navbar_nav bg-textured" ref={navbar}>
          <div className="accriditation">
            Made by <span className="maker">Ahmed Yassine Meddeb</span>
          </div>

          {/* <!-- close nav --> */}
          <div
            className="nav_div"
            ref={navBtnInt}
            onClick={handleNavBtnIntClick}
          >
            <IonIcon icon={closeOutline} className="navbar_nav-btn"></IonIcon>
          </div>
          {/* <!-- Login form --> */}
          <div className="container-popup" id="container">
            <div className="form-container sign-in-container" id="login-form">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="account-head">Login</h1>
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
                <input type="submit" value="login" className="popup-btn" />
                <p className="input-para">
                  Don't have an account?
                  <Link to="/signup" className="input-link">
                    Create one here
                  </Link>
                </p>
              </form>
            </div>
          </div>
          <div className="page_links">
            <a href="#" className="page_link">
              Home
            </a>
            <a href="#" className="page_link">
              Shop
            </a>
            <a href="#" className="page_link">
              About Us
            </a>
            <a href="#" className="page_link">
              Contact Us
            </a>
          </div>
          <div className="socials">
            <h2 className="social-header">Follow Us</h2>
            <IonIcon className="social" icon={logoInstagram}></IonIcon>
            <IonIcon className="social" icon={logoFacebook}></IonIcon>
            <IonIcon className="social" icon={logoTwitter}></IonIcon>
          </div>
        </div>
      </header>
    </>
  );
}
