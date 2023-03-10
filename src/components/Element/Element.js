import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Element.css'

const Element = ({element, handleAddToCart}) => {
    
    const { name, description, age, time, img} = element
    return (
        <div className='container'>
            <div className='container-element'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Description: {description}</p>
            <div className='time-age'>
                <p>Age: {age}</p>
                <p>Time Required: {time}</p>
            </div>
            </div>
            <button onClick={() => handleAddToCart(element)} className='btn'>
                <p className='btn-text'>Play</p>
                <FontAwesomeIcon icon={faPlusCircle}/>

            </button>
            
            
        </div>
    );
};

export default Element;