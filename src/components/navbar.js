import { Link } from "react-router-dom";
import "../App.css"
const Navbar=()=>{

const isRestraunt=localStorage.getItem("isRestraunt");
var displayMessage= (isRestraunt?"Restraunt":"Welcome");
const NAME=localStorage.getItem("name");
    return(
        <div className="navbar">
            <h3>{displayMessage} <strong>{NAME}</strong></h3>
            <div className="nav-links">
                <Link to={'/restraunt'}><h3><strong>{isRestraunt?"Dashboard":"Home"}</strong></h3></Link>
                <Link to={'/orders'}><h3><strong>{isRestraunt?"ORDERS":"CART"}</strong></h3></Link>
            </div>
        </div>
    )
}


export default Navbar;