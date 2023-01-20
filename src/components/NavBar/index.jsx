
import "./styles.css"
import logo from "./img/Luz de luna-logo.png"
import cartLogo from "./img/carrito.png"
import { Link } from 'react-router-dom';
import { CartContext } from "../../context";
import { useContext } from "react";




const NavBar =({ onHandlerCart })=>{

    const {cart} = useContext(CartContext);

    return(

    
        
    <div className="navbar">
        
        <div className="contenedorImagenes">
        <img src= {logo} alt="logo" className="logo" />
        
        </div>

        

        <div className="contenedorbutton">

            <div className="cart-container">
                <div className="number-cart">{cart.length}</div>
                <img src={cartLogo} className=" cart" alt="cart" onClick={onHandlerCart} />
                
            </div>
        
            <Link className="home" to='/'><button className="button">Home</button></Link>
            <Link className="products" to="/products"><button className="button">Productos</button></Link>
            


        </div>
        
    </div>  
    )
}

export default NavBar