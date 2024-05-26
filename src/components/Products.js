import React from 'react'

function Products({products,price}) {
  return (
<div >
<img  style={{width:"100px",height:"100px",backgroundColor:"red",marginTop:"50px"}}/>
    <div>{products}</div>
    <p>{price}</p>
    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>

    <div style={{width:"20%",display:'flex',alignItems:"center",justifyContent:"space-around"}}> <button>Add to cart</button>
    <button>Remove from cart</button></div>
    </div>  
    </div>
  )
}

export default Products