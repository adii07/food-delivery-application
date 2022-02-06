import React, { useState } from "react";
import { Link, useNavigate,  } from "react-router-dom";
import "./register.css";
const LoginRegister = () => {
  const [addclass, setaddclass] = useState("");
  const [userEmail,setEmail]= useState('');
  const [userCity,setCity]= useState('');
  const [userName,setName]= useState('');
  const [isRestraunt,setRest]=useState(false);
  let navigate=useNavigate();

  const redirect=(e)=>{
    if(userName==='' || userEmail==='' || userCity==='')return;

    localStorage.setItem("name",userName.toUpperCase());
    localStorage.setItem("email",userEmail.toUpperCase());
    localStorage.setItem("city",userCity.toUpperCase());
    localStorage.setItem("isRestraunt",isRestraunt); 
    console.log(userName,userEmail,userCity);
  }
  const navigateToDash=()=>{
    redirect();
    navigate('/restraunt');
  }
  return (
    <div className={`container ${addclass}`} id="container">
      <div className="form-container  sign-up-container">
        <form>
          <h1>Bussiness Account</h1>
          <input type="text" required placeholder="RESTAURANT NAME" onChange={e=>{setName(e.target.value)}} />
          <input type="email" required placeholder="EMAIL" onChange={e=>{setEmail(e.target.value)}} />
          <input type="text" required placeholder="CITY" onChange={e=>{setCity(e.target.value)}} />
          <input type="password" required placeholder="PASSWORD" onChange={e=>{setRest(true)}} />
         <button type="submit"  onClick={navigateToDash}>REGISTER</button>
         {/* <Link to='/restraunt'></Link>*/}
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form>
          <h1>Customer Account</h1>
          <input type="text" required placeholder="NAME" onChange={e=>{setName(e.target.value)}} />
          <input type="email" required placeholder="EMAIL"  onChange={(e)=>setEmail(e.target.value)} />
          <input type="text" required placeholder="CITY" onChange={e=>{setCity(e.target.value)}} />
          <input type="password" required placeholder="PASSWORD" onChange={e=>{setRest(false)}}/>
          <Link to='/user'><button type="submit"  onClick={redirect}>Sign in</button></Link>
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