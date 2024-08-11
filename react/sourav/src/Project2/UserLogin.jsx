import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import users from "./data";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
let [err,setErr]=useState("")
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    users.map((user) => {
      if (user.email === email && user.password === password) {
        navigate(`/user-details/${user.id}`);
      }
      else{
        setErr("Try Again")
      }

      return user;
    });
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>{err}</div>

        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </p>
    </div>
  );
};

export default UserLogin;
