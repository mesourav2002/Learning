import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h1>Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </header>
      </div>
    </div>
  );
};

export default Form;
