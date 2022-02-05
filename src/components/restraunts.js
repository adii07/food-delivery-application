import { useEffect, useState } from 'react';
import'./menu.css'
const RES=({menu})=>{
    const[res,setRes]=useState(null);
    useEffect(()=>{
        setRes(menu);
    })
    return(
        <div className="res-layout">
            {res===null || res.length===0?<h3>Sorry there are no restraunts near you</h3>:
                <h2>List of restraunt near {localStorage.getItem("city")}</h2>
            }

                        {
                res && res.map((post,key) =>{   
                    return(
                        <div className='res-list' key={key+1}>
                            <h3 className="res-item">{post.name}</h3>
                            <h4 className="res-item">{post.city}</h4> 
                        </div>
                    )
                })
            }
        
        </div>

    );
}

export default RES;