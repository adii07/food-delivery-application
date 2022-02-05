import React, { useState } from "react";
import { Route,Navigate, Router,Link } from "react-router-dom";
import "./register.css";
const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  const [userEmail,setEmail]= useState('');
  const [userPassword,setPassword]= useState('');
  const [userCity,setCity]= useState('');
  const [userName,setName]= useState('');

  const redirect=(e)=>{
    console.log(userName," ",userCity," ",userEmail," ",userPassword);
  }
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Bussiness Account</h1>
          <input type="text" placeholder="RESTAURANT NAME" onChange={e=>{setName(e.target.value)}} />
          <input type="email" placeholder="EMAIL" onChange={e=>{setEmail(e.target.value)}} />
          <input type="text" placeholder="CITY" onChange={e=>{setCity(e.target.value)}} />
          <input type="password" placeholder="PASSWORD" onChange={e=>{setPassword(e.target.value)}} />
          <Link to='/restraunt'><button type="submit" onClick={redirect}>REGISTER</button></Link>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Customer Account</h1>
          <input type="text" placeholder="NAME" onChange={e=>{setName(e.target.value)}} />
          <input type="email" placeholder="EMAIL"  onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" placeholder="CITY" onChange={e=>{setCity(e.target.value)}} />
          <input type="password" placeholder="PASSWORD" onChange={(e)=>{setPassword(e.target.value)}}/>
          <button type="submit" onClick={redirect}>SignUp</button>
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