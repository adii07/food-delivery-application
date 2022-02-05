import { useEffect,useState } from "react";

const useFetch=(url)=>{
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
                // const req=data.find(({name})=>name===NAME);
                const req=data;
                // console.log(data);
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
    },100);
    return()=>{abortControl.abort();}
    },[url]);

    return {menu,isPending,error};
}
export default useFetch;