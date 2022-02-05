const addItems=(props)=>{
    const{foodItem,foodPrice}=props;
    const ID=localStorage.getItem("name");
    const item={
        "name":foodItem,
        "cost":foodPrice,
        "by":ID,
    }
    fetch('http://localhost:8000/items', {
        method: 'POST',
        body: JSON.stringify(item),
        headers: { 'Content-Type': 'application/json' }
      })

}
export default addItems;