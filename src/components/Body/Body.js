import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Element from '../Element/Element';
import './Body.css'


const Body = () => {
    const [elements, setElements] = useState([]);
    const [cart, setCart] = useState([]);
    

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])

    

    const handleAddToCart = (props) => {
       
        const time = props.time
        let newTime = [];
        newTime.push(time);
        const newNewTime = [...cart, newTime];

        
        

        setCart(newNewTime);

    }
    
    
    return (
        <div className='element-container'>
            <div className='element'>
                {
                    elements.map(element => 
                        <Element element={element}
                        key={element.id}
                        handleAddToCart={handleAddToCart}
                        ></Element>
                        )
                }

            </div>
            <div>
                <Cart cart={cart}></Cart>
            </div>
           
          
        </div>
    );
};

export default Body;