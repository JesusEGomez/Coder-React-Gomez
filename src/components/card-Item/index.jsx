import "./style.css"
import { FaWindowClose } from "react-icons/fa"

const CartItem = ({id, image, name, price, quantity, onRemoveItem}) => {
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={image} alt={name}/>
            <div className="cart-item-details">
                <h3 className="cart-name">{name}</h3>
                <p className="cart-price">${price}</p>
                <p className="cart-quantity">Cantidad: {quantity}</p>
            </div>
            <div className="cart-item-action">
                <FaWindowClose  
                className="cart-item-remove"
                onClick={() => onRemoveItem(id)}
                ></FaWindowClose>
            </div>
        </div>
    )
}
export default CartItem;