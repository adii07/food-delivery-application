import './dashboard.css'
import MENU from './menuDisplay';
import { TextField,Button} from "@mui/material";
import {useEffect, useState } from "react";
import useFetch from './useFetch';
import Navbar from './navbar';
import addItems from './addItem';


const DashBoard=()=>{
    const NAME=localStorage.getItem("name");
    const[foodItem,addItem]=useState("");
    const[foodPrice,addPrice]=useState("");
    const{menu,isPending,error}=useFetch('http://localhost:8000/items?by='+NAME);

    function addToJson(){
        if(foodPrice==='' || foodItem==='') return;
        console.log(foodItem);
        console.log(foodPrice);
        addItems({foodItem,foodPrice});
    }
    
    return(
        <div>
            <Navbar/>
            <div className="input-container">
                <TextField id="outlined-basic" label="Item" placeholder="Item Name" variant="outlined" className="item-input" onChange={(e)=>addItem(e.target.value)} onBlur={(e)=>{addItem(e.target.value)}}/>
                <TextField id="outlined-basic" label="Price" placeholder="Item Price" type='number' className="item-input" onChange={(e)=>addPrice(e.target.value)} onBlur={(e)=>addPrice(e.target.value)} variant="outlined" />
                <Button variant="contained" onClick={addToJson}>Add</Button>
            </div>
            {error && <div>{error}</div>}
            {isPending && <div>Menu is loading...</div>}
            {menu && <MENU menu={menu} />}
        </div>
        
    );

}
export default DashBoard;