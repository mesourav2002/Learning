import React from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Style/LandingPage.css";
import { useState, useEffect } from "react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
export const LandingPage = () => {
  let con = useRef();

  let signInClick = () => {
    con.current.classList.remove("sign-up-mode");
  };
  let signUpClick = () => {
    con.current.classList.add("sign-up-mode");
  };

  // !==================== Users Login ==================
  let emailField = useRef();
  let pswField = useRef();
  let navigate = useNavigate();
  let [err, setErr] = useState("");

  let userLoginSubmit = async (e) => {
    e.preventDefault();
    let email = emailField.current;
    let pswd = pswField.current;

    const response = await fetch("http://localhost:4000/users");
    const users = await response.json();
    users.map((user) => {
      if (user.Email === email.value && user.Number === pswd.value) {
        let userId = user.id;
        navigate(`/userportal`);
      } else {
        setErr("Try Again");
        setTimeout(() => setErr(""), 4000);
      }
    });
  };

  // !==================== Admin Login ==================
  let admineEmailField = useRef();
  let adminPswField = useRef();
  let adminLoginSubmit = (e) => {
    e.preventDefault();

    let email = admineEmailField.current;
    let pswd = adminPswField.current;
    console.log(email.value, pswd.value);

    let credentials = {
      emailadress: "sourav",
      password: "2002",
    };
    let { emailadress, password } = credentials;
    if (email.value === emailadress && pswd.value === password) {
      navigate("/adminportal");
    } else {
      email.style.cssText = "color: red";
      pswd.style.cssText = "color:red";
    }
  };

  // !=====================================

  let [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  // !========================================
  return (
    <>
      <div className="main">
        <div className="containerr" ref={con}>
          <div className=" signin-signup">
            <form action="" className="sign-in-form" onSubmit={userLoginSubmit}>
              <h2 className="title">User Login</h2>
              <div className="input-filed">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" ref={emailField} />
              </div>
              <div className="input-filed">
                <i className="fas fa-lock"></i>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  ref={pswField}
                />
                <div className="see" onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </div>
              </div>
              <div>{err}</div>
              <input type="submit" value="Login" className="btn" />
              <p className="social-text">Or sign in with social platform</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>

                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="/" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>

                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              {/* <p className="account-text">Don't have an account? <a href="/" id="sign-up btn2">Sign up</a></p> */}
            </form>
            <form
              action=""
              className="sign-up-form"
              onSubmit={adminLoginSubmit}
            >
              <h2 className="title">Admin Login</h2>
              <div className="input-filed">
                <i className="fas fa-user"></i>
                <input
                  ref={admineEmailField}
                  type="text"
                  placeholder="Username"
                />
              </div>
              {/* <div className="input-filed">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div> */}
              <div className="input-filed">
                <i className="fas fa-lock"></i>
                <input
                  ref={adminPswField}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />
                <div className="see" onClick={togglePasswordVisibility}>
                  {showPassword ? <VisibilityOffIcon /> : <RemoveRedEyeIcon />}
                </div>
              </div>
              <input type="submit" value="LOGIN" className="btn" />
              <p className="social-text">Or sign in with social platform</p>
              <div className="social-media">
                <a href="/" className="social-icon">
                  <i className="fab fa-facebook"></i>
                </a>

                <a href="/" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>

                <a href="//" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>

                <a href="/" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              {/* <p className="account-text">Already have an account? <a href="/" id="sign-up btn2">Sign in</a></p> */}
            </form>
          </div>
          <div className="panels-container">
            <div className="panel left-panel">
              <div className="content">
                <h3>User Login</h3>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil, ea officia! Corporis, nisi? Eveniet, aut!
                </p>
                <button className="btn" onClick={signInClick} id="sign-in-btn">
                  {" "}
                  Sign in
                </button>
              </div>
              <img src="svg1.svg" alt="" className="image" />
            </div>
            <div className="panel right-panel">
              <div className="content">
                <h3>Admin Login</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam eaque eius temporibus illo dolor perspiciatis.
                </p>
                <button className="btn" onClick={signUpClick} id="sign-up-btn">
                  {" "}
                  Sign In
                </button>
              </div>
              <img src="svg2.svg" alt="" className="image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
