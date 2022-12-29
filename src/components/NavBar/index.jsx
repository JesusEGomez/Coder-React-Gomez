
import "./styles.css"
import logo from "./img/Luz de luna-logo.png"
import cart from "./img/carrito.png"
import { Link } from 'react-router-dom';



const NavBar =({Children})=>{
    return(

        
    <div className="navbar">
        <div className="contenedorImagenes">
        <Link className="home" to='/'><img src= {logo} alt="logo" className="logo" /></Link>
        
        </div>

        

        <div className="contenedorbutton">

            <div className="cart-container">
                <div className="number-cart">0</div>
                <img src={cart} className=" cart" alt="cart" />
                
            
            </div>
        
            <button className="button"><Link className="home" to='/'>Home</Link></button>
            <button className="button"><Link className="products" to="/products">Productos</Link></button>
            <button className="button us">Nosotros</button>
            <button className="button contact">Contacto</button>
            


        </div>
        
    </div>  
    )
}

export default NavBar