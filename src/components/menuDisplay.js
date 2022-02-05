import'./menu.css'
const MENU=({menu})=>{
    return(
        
        <div className="menu-layout">
            <h2>Menu Item of {localStorage.getItem("name")} Restraunt:</h2>
            {
                menu.map((post,key) =>{   
                    return(
                        <div className='menu-list' key={key+1}>
                            <div className="menu-item">{post.name}</div>
                            <div className="menu-item">₹{post.cost}</div> 
                        </div>
                    )
                })
            }
        
        </div>

    );
}

export default MENU;