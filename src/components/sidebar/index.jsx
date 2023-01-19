import "./style.css"
import { FaWindowClose } from "react-icons/fa"
import { Link } from "react-router-dom"
import { CartContext } from "../../context"
import { useContext } from "react"
import CartItem from "../card-Item"

const Sidebar = ({onClose, isOpen}) =>{
    const {cart} = useContext(CartContext)
    return(
        <div className="sideBar"
        style={{
            transform: isOpen ? "translateX(0)" : "translateX(100%)"
        }}>
            <div className="close-button-container">
            <FaWindowClose onClick={onClose} className="close-Button" />
            </div>
            {cart.length === 0 ? (<p className="empty-cart>">Tu carrito esta vacio</p>)
            : (
                cart.map((item) => (
                    <CartItem key={item.id} {...item} />
                )
                )
            )}
            <Link to={`/cart`} ><button>Ir al Carrito</button></Link>
        </div>
    )


}

export default Sidebar