import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Style/UserLogin.css";

const UserLogin = () => {
  let params = useParams();
  // console.log(params.id);

  let userId = params.id;

  let [userData, setUserData] = useState({});
  useEffect(() => {
    fetch(`https://jsonplaceholder.org/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userData]);

  let con = useRef();
  let emailField = useRef();
  let pswField = useRef();
  let navigate = useNavigate();

  let signInClick = () => {
    con.current.classList.remove("sign-up-mode");
  };
  let signUpClick = () => {
    con.current.classList.add("sign-up-mode");
  };
  let { firstname, lastname, email, login ,id} = userData;

  let inputpswd = pswField.current;
  let emailpass = emailField.current;

  let handleSubmit = () => {
    if (email === emailpass.value && login.password === inputpswd.value) {
      navigate(`/adminportal/userdetails/${id}`);
    }
  };

  return (
    <>
      <h1>
        {firstname} {lastname}
      </h1>
      <div className="main">
        <div className="containerr" ref={con}>
          <div className=" signin-signup">
            <form action="" className="sign-in-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign in User</h2>
              <div className="input-filed">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  ref={emailField}
                  // value={email}
                />
              </div>
              <div className="input-filed">
                <i className="fas fa-lock"></i>
                <input type="password" placeholder="Password" ref={pswField} />
              </div>
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
            <form action="" className="sign-up-form">
              <h2 className="title">Sign Up</h2>
              <div className="input-filed">
                <i className="fas fa-user"></i>
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-filed">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-filed">
                <i className="fas fa-lock"></i>
                <input type="text" placeholder="Password" />
              </div>
              <input type="submit" value="Sign up" className="btn" />
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
                <h3>Sourav</h3>
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
                <h3>Sourav</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam eaque eius temporibus illo dolor perspiciatis.
                </p>
                <button className="btn" onClick={signUpClick} id="sign-up-btn">
                  {" "}
                  Sign up
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

export default UserLogin;
