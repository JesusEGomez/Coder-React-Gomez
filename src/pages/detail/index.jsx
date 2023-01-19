import './styles.css';
import React, { useContext } from 'react';
import {useLocation } from 'react-router-dom';
import Card from '../../components/card';
import { CartContext } from "../../context";





const Detail = () => {
    const {state} = useLocation();
    const {onDecreaseItem, onIncreaseItem, getItemQuantity} = useContext(CartContext);




    return (
        <div className="detail-container">
            {state ? 
            (<Card 
                product={state}  
                key={state.id} 
                onSelect={()=>{} } 
                type="plusCard" 
                decreaseQty={onDecreaseItem} 
                increaseQty={onIncreaseItem}
                numberOfItems={getItemQuantity(state?.id)}
                />)
                : null} 
            
        </div>
    );
}

export default Detail;