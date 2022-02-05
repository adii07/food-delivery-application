const addItems=(props)=>{
    const{foodItem,price}=props;
    const ID=localStorage.getItem("name");
    const item={
        "foodItem":foodItem+"",
        "cost":price
    }
    fetch('http://localhost:8000/restraunt/'+ID, {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
      })

}
export default addItems;