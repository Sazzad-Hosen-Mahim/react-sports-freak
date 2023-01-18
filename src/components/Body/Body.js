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
        // console.log(props);

    }

    useEffect(() => {
        

    }, [])
    
    
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
                <Cart></Cart>
            </div>
           
          
        </div>
    );
};

export default Body;