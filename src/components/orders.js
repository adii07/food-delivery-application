import'./menu.css'
import { useEffect, useState } from "react";
import Navbar from './navbar';

const ORDERS=()=>{
    const NAME=localStorage.getItem("name");
    const url='http://localhost:8000/orders?restoname='+NAME;

    const[menu,setMenu]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState();

    useEffect(()=>{
        const abortControl=new AbortController();
        setTimeout(()=>{
            fetch(url,{signal:abortControl.signal})
            .then(res=>{
                if(!res.ok) throw Error('Could not fetch the data');
                return res.json();
            })
            .then(data=>{
                const req=data;
                console.log(data);
                setMenu(req);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                if(err.name==="AbortError"){
                    console.log("Aborted");
                }else{
                    setIsPending(false);
                    setError(err.message);
                }
            })
    },1000);
    return()=>{abortControl.abort();}
    },[url]);

    return(
        <div>
            <Navbar/>
        <div className="orders-container">
            <h1>Orders:</h1>
            <hr/>
            {
               menu && menu.map((item,key)=>{
                    return(
                    <div className="order-list" key={key+1}>
                    <div className="order-item">{key+1}.</div>
                    <div className="order-item">₹{item.cost}</div> 
                    {
                        item.Items.map((i,k)=>(<div key={k} className='order-item'>{i}</div>))
                    }
                    </div>)
                })
            }
        </div>
        </div>
    );

}

export default ORDERS;