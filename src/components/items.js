import { Button } from '@mui/material';
import { useLocation } from 'react-router-dom';
import'./menu.css'
import Navbar from './navbar';
import useFetch from './useFetch';
const FOOD=()=>{
    const location=useLocation();
    const{NAME}=location.state;
    console.log(NAME)
    const{menu,isPending,error}=useFetch('http://localhost:8000/items?by='+NAME);
    
    return(
        
        <div className="res-layout">
            <Navbar isRestraunt='1'/>
            <h2>Menu Item of {NAME} Restraunt:</h2>
            {
                menu && menu.map((post,key) =>{   
                    return(
                        <div className='res-list' key={key+1}>
                            <div className="menu-item">{post.name}</div>
                            <div className="menu-item">₹{post.cost}</div> 
                            <button className='cart'>Add to cart</button>
                        </div>
                    )
                })
            }
        
        </div>

    );
}

export default FOOD;