import React from "react";
import "./styles.css"

const card = ({product, onSelect, type="minusCard"})=>{
    const{id, categoryId, description, image, name, price, stock}= product || {};
    
    if (product !== null){
        return (
            <div className={ type === "minusCard" ? "card" : "plusCard"} onClick={() => onSelect (product)}>
                <img className={type === "minusCard" ? "card-image" : "card-image plusCard"} src={image} alt={name} />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-desciption">{description}</h2>
                    <p className="card-price">{price}</p>
                    <p  className="card-stock"> {stock} in stock</p>
                </div>

                <div className="card-button-container">
                    <button className="card-button-minus">-</button>
                    <input type="text" 
                    className="card-input"
                    placeholder="0"
                    />
                    <button className="card-button-plus">+</button>
                </div>
                
            </div>
            )
    }
    
    
}
export default card;