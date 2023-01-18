import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Element from '../Element/Element';
import './Body.css'


const Body = () => {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])
    
    return (
        <div className='element-container'>
            <div className='element'>
                {
                    elements.map(element => 
                        <Element element={element}
                        key={element.id}
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