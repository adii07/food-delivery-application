import'./menu.css'
const MENU=({menu})=>{
    //   const[menu,setMenu]=useState;
    // console.log(menu);
    return(
        <div className="menu-layout">
            <h2>Menu Item of {menu.name} Restraunt:</h2>
            {
                
            menu.items.map((post,key) =>{
                
                        return(

                    <div className='menu-list' key={menu.items.findIndex(e => e.foodItem === post.foodItem)}>
                        <div className="menu-item">{post.foodItem}</div>
                        <div className="menu-item">₹{post.cost}</div> 
                        {/* <Button className='delete-btn' onClick={removefromList}>
                            Delete
                        </Button> */}
                    </div>
                        )
                    })
            }
        
        </div>

    );
}

export default MENU;