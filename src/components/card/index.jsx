import React from "react";
import "./styles.css"

const card = ({product})=>{
    const{id, categoryId, description, image, name, price, stock}= product || {};
    return (
        <div className="card">
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <h2 className="card-title">{name}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                <p  className="card-stock"> {stock} in stock</p>
            </div>
            <div className="card-button-container">
                <button className="card-button-minus">-</button>
                <input type="text" 
                className="card-input"
                />
                <button className="card-button-plus">+</button>
            </div>
        </div>
        )
        
}
export default card;