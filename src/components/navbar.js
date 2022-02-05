import "../App.css"
const Navbar=()=>{

const isRestraunt=localStorage.getItem("isRestraunt");
var displayMessage= (isRestraunt?"Restraunt":"Welcome");
const NAME=localStorage.getItem("name");
    return(
        <div className="navbar">
            <h3>{displayMessage} <strong>{NAME}</strong></h3>
        </div>
    )
}


export default Navbar;