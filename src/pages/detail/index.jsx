import './styles.css';
import React, { useState } from 'react';
import {useLocation } from 'react-router-dom';
import Card from '../../components/card';
import { PRODUCTS } from '../../constans/data/products';




const Detail = () => {
    const {state} = useLocation();
    const [cart, setCart] = useState([]);
    console.log("cart", cart);

    const onDecreaseItem = (id) => {
        setCart(currentCart =>{
            if(currentCart?.find((product)=> product.id === id)?.quantity === 1){
                return currentCart.filter((product)=> product.id !==  id);
                
            }else{
                return currentCart?.map((product)=>{
                    if(product.id === id){
                        return {
                            ...product,
                            quantity: product.quantity -1
                        }
                    }else {
                            return product;
                    }
                })
            }
        })
    }
    const onIncreaseItem = (id) => {
        const item = PRODUCTS.find((product)=> product.id === id);
        if(cart?.find((product)=> product.id === id)?.quantity === item.stock) return;
        if(cart?.length === 0){
            setCart([{...item, quantity: 1}])   
        }else if(cart.length > 0 && !cart?.find((product)=> product.id === id)){
            setCart([...cart, {...item, quantity: 1}]);
        }else{
            setCart(currentCart => {
                return currentCart.map((product)=>{
                    if(product.id === id){
                        return {...product, quantity: product.quantity + 1}
                    } else {
                        return product;
                    }
                })
            })
        }
    }

    const getItemQuantity = (id) => {
        return cart?.find((product) => product.id === id)?.quantity || 0;
    }

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