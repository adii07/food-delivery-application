import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../App.css"
const Navbar=(props)=>{
const isRes=localStorage.getItem('isRestraunt');
var displayMessage= "Restraunt"
var dashboard="Dashboard";
var orders="ORDERS"
var link1="",link2='';
function setValue(){
    if(isRes==='true'){
        displayMessage="Restraunt";
        dashboard="Dashboard";
        orders="ORDERS";
        link1='/restraunt'
        link2='/orders'
    }else{
        displayMessage="Welcome";
        dashboard="Home";
        orders="CART";
        link1='/user'
        link2='/user'
    }
}
setValue();
const NAME=localStorage.getItem("name");
    return(
        <div className="navbar">
            <h3>{displayMessage} <strong>{NAME}</strong></h3>
                    <div className="nav-links">
                        <Link to={link1}><h3><strong>{dashboard}</strong></h3></Link>
                        <Link to={link2}><h3><strong>{orders}</strong></h3></Link>
                        <Link to={'/'}><h3><strong style={{color:"red"}}>LOGOUT</strong></h3></Link>
                    </div>
        </div>
    )
}


export default Navbar;