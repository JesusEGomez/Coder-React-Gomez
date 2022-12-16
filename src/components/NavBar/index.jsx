import React, { Children } from "react";
import "./styles.css"
import logo from "./img/Luz de luna-logo.png"
import cart from "./img/carrito.png"



const NavBar =({Children})=>{
    return(

        
    <div className="navbar">
        <div className="contenedorImagenes">
        <img src= {logo} alt="logo" className="logo" />   
        </div>

        

        <div className="contenedorBotones">

            <div className="cart-container">
                <div className="number-cart">0</div>
                <img src={cart} className=" cart" alt="cart" />
            
            </div>
        
            <button className="botones home">Home</button>
            <button className="botones productos">Productos</button>
            <button className="botones nosotros">Nosotros</button>
            <button className="botones contacto">Contacto</button>
            


        </div>

        
    </div>
    )
}

export default NavBar