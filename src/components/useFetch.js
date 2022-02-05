import { useEffect,useState } from "react";

const useFetch=(url)=>{
    const[menu,setMenu]=useState(null);
    const[isPending,setIsPending]=useState(true);
    const[error,setError]=useState();
    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
            .then(res=>{
                if(!res.ok) throw Error('Could not fetch the data');
                return res.json();
            })
            .then(data=>{
                const req=data.find(({id})=>id==="kfc");
                setMenu(req);
                setIsPending(false);
                setError(null);
            })
            .catch((err)=>{
                setError(err.message);
            })
    },1000);
    },[url]);
    return {menu,isPending,error};
}
export default useFetch;