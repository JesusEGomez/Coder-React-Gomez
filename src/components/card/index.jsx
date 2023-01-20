import React from "react";
import "./styles.css"

const card = ({product, onSelect, type="minusCard", decreaseQty, increaseQty, numberOfItems})=>{
    const{id, categoryId, description, image, name, price, stock}= product || {};
    
    if (product !== null){
        return (
            <div className={ type === "minusCard" ? "card" : "plusCard"} onClick={() => onSelect (product)}>
                <img className={type === "minusCard" ? "card-image" : "card-image plusCard"} src={image} alt={name} />
                <div className="card-content">
                    <h2 className="card-title">{name}</h2>
                    {type === "plusCard" && (
                        <h2 className="card-desciption">{description}</h2>
                    )} 
                    <p className="card-price">${price}</p>
                    <p  className="card-stock"> {stock} in stock</p>
                </div>
                {type === "plusCard" && (
                    <div className="card-button-container">
                    <button
                        disabled={numberOfItems === 0 }
                        className="card-button-minus" 
                        onClick={()=> decreaseQty(id)}

                        >-</button>
                    <input 
                        disabled
                        type="text" 
                        className="card-input"
                        value={numberOfItems}
                    />
                    <button 
                        className="card-button-plus" 
                        onClick={()=> increaseQty(id)}
                        disabled={numberOfItems === stock}
                        >+</button>
                </div>
                )}
                
                
            </div>
            )
    }
    
    
}
export default card;