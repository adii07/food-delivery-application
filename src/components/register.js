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
  const url='http://localhost:8000/restraunt';

  const redirect=(e)=>{
    if(userName==='' || userEmail==='' || userCity===''){ e.preventDefault();}
    localStorage.setItem("name",userName.toUpperCase());
    localStorage.setItem("email",userEmail.toUpperCase());
    localStorage.setItem("city",userCity.toUpperCase());
    localStorage.setItem("isRestraunt",isRestraunt); 
    // console.log(userName,userEmail,userCity);
  }
  const navigateToDash=()=>{
    redirect();
    register();
    navigate('/restraunt');
  }

  function register(){
    const abortControl=new AbortController();
    setTimeout(()=>{
        fetch(url,{signal:abortControl.signal})
        .then(res=>{
            if(!res.ok) throw Error('Could not fetch the data');
            return res.json();
        })
        .then(data=>{
            const req=data.findIndex(({name})=>name===userName);
            if(req!==-1) console.log("Alread present");
            else{
              const cred={
                "name": userName.toLocaleUpperCase(),
                "city": userCity.toUpperCase()
              }
              // console.log(cred);
              fetch('http://localhost:8000/restraunt', {
              method: 'POST',
              body: JSON.stringify(cred),
              headers: { 'Content-Type': 'application/json' }
            })
            }
        })
        .catch((err)=>{
            if(err.name==="AbortError"){
                console.log("Aborted");
            }
        })
},1000);
  }

  const navigateToHome=()=>{
    redirect();
    navigate('/user');
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
         <button type="button"  onClick={navigateToDash}>REGISTER</button>
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
          <Link to='/user'><button type="submit"  onClick={navigateToHome}>Sign in</button></Link>
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