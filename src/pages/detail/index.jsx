import './styles.css';
import React from 'react';
import {useLocation } from 'react-router-dom';
import Card from '../../components/card';



const Detail = () => {
    const {state} = useLocation();
    return (
        <div className="detail-container">
            {state ? (<Card product={state}  key={state.id} onSelect={()=>{} } type="plusCard"/>): null} 
            
        </div>
    );
}

export default Detail;