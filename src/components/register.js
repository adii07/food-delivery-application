import React, { useState } from "react";
import "./register.css";
const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Bussiness Account</h1>
          <input type="text" placeholder="RESTAURANT NAME" />
          <input type="email" placeholder="EMAIL" />
          <input type="text" placeholder="CITY" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">REGISTER</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Customer Account</h1>
          <input type="email" placeholder="EMAIL" />
          <input type="password" placeholder="PASSWORD" />
          <button type="submit">SignUp</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <button
              className="ghost"
              id="signIn"
              onClick={() => setaddclass("")}>
              Sign Up as Customer.
            </button>
          </div>
          <div className="overlay-panel overlay-right">
            <button
              className="ghost"
              id="signUp"
              onClick={() => setaddclass("right-panel-active")}>
              SignUp as a Restaurant.
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;