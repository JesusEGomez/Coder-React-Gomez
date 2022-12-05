import React, { Children } from "react";
import "./styles.css"
import logo from "./img/Luz de luna-logo.png"
import carrito from "./img/carrito.png"



const NavBar =({Children})=>{
    return(

        
    <div className="navbar">
        <div className="contenedorImagenes">

        <img src= {logo} alt="logo" className="logo" />
        <img src={carrito} className=" carrito" alt="carrito" />

        
        

        </div>

        

        <div className="contenedorBotones">
            <button className="botones home">Home</button>
            <button className="botones productos">Productos</button>
            <button className="botones nosotros">Nosotros</button>
            <button className="botones contacto">Contacto</button>


        </div>

        
    </div>
    )
}

export default NavBar