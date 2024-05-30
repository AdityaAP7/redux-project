1
w
e
r
f
f
g
f

f
f
f
f





import React from "react"
import Products from "./Products";
import Cart from "./Cart";

const products = [
    {
      name: "Aurora Smartphone",
      price: 699.99
    },
    {
      name: "Nebula Tablet",
      price: 329.99
    },
    {
      name: "Galaxy Pro Laptop",
      price: 1099.99
    },
    {
      name: "Meteor Smartwatch",
      price: 249.99
    },
    {
      name: "Stellar Earbuds",
      price: 79.99
    },
    {
      name: "Comet Gaming Console",
      price: 499.99
    },
    {
      name: "Pulsar VR Headset",
      price: 299.99
    },
    {
      name: "Quasar Drone",
      price: 399.99
    },
    {
      name: "Orbit Bluetooth Speaker",
      price: 59.99
    },
    {
      name: "Lunar Fitness Tracker",
      price: 149.99
    }
  ]
  
  

const Home =()=>{
    return(
        <div>
          
                <Cart/>
            
                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
              {  products.map((product,index)=>{
                 return  ( 
                     <Products products={product.name} price={product.price}/>)

                })}
          
          </div>
         
        </div>
    )
}


export default Home;
