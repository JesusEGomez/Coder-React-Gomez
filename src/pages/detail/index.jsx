import './styles.css';
import React from 'react';
import { useLocation } from 'react-router-dom';


const Detail = () => {
    const {state} = useLocation()
    console.log('state', state)
    return (
        <div className="detail-container">
            <img src={state.image} alt={state.name} className='detail-image' /> 
            <div className='info-container'>
                <h2 className='detail-name'>{state.name}</h2>
                <h3>{state.price}</h3>
                <p>{state.description}</p>

            </div>

        </div>
    );
}

export default Detail;