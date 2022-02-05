import "../App.css"
const Navbar=()=>{

const NAME=localStorage.getItem("name");
    return(
        <div className="navbar">
            <h3><strong>{NAME}</strong> Restraunt</h3>
        </div>
    )
}


export default Navbar;