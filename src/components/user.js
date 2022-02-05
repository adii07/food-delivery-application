import Navbar from "./navbar";
import RES from "./restraunts";
import useFetch from "./useFetch";

const USER=()=>{
    const LOCATION=localStorage.getItem('city');
    const{menu,isPending,error}=useFetch('http://localhost:8000/restraunt?city='+LOCATION);
    // console.log(menu);
    return(
        <div>
            <Navbar  isRestraunt='1' />
            <RES menu={menu}/>
        </div>
    );
}
export default USER;