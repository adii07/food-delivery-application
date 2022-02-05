import './dashboard.css'
import MENU from './menuDisplay';
import { TextField,Button} from "@mui/material";
import { useEffect, useState } from "react";


const DashBoard=()=>{
    const[foodItem,addItem]=useState("")
    const[foodPrice,addPrice]=useState("")
    const[menu,setMenu]=useState(null);
    const[isPending,setIsPending]=useState(true);
    
    useEffect(()=>{
        setTimeout(()=>{
            fetch(' http://localhost:8000/restraunt')
            .then(res=>{
                return res.json();
            })
            .then(data=>{
                const req=data.find(({id})=>id==="mac");
                setMenu(req);
                setIsPending(false);
            })
            .catch((err)=>{
                console.log(err.message);
            })
    },1000);
    },[]);

    function addToJson(){
        if(foodPrice==='' || foodItem==='') return;
        console.log(foodItem);
        console.log(foodPrice);
    }
    
    return(
        <div>
            <div className="input-container">
                <TextField id="outlined-basic" label="Item" placeholder="Item Name" variant="outlined" className="item-input" onChange={(e)=>addItem(e.target.value)} onBlur={(e)=>{
                    addItem(e.target.value)
                    
                }}/>
                <TextField id="outlined-basic" label="Price" placeholder="Item Price" type='number' className="item-input" onChange={(e)=>addPrice(e.target.value)} onBlur={(e)=>addPrice(e.target.value)} variant="outlined" />
                <Button variant="contained" onClick={addToJson}>Add</Button>
            </div>
            {isPending && <div>Menu is loading...</div>}
            {menu && <MENU menu={menu} />}
        </div>
        
    );

}
export default DashBoard;