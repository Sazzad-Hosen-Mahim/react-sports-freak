import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Element from '../Element/Element';
import './Body.css'


const Body = () => {
    const [elements, setElements] = useState([]);
    const [cart, setCart] = useState([]);
    // const previousTime = cart;
    // const previousTimeInt = parseInt(previousTime);
    // console.log(time);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setElements(data))
    },[])

    // console.log(elements);

    const handleAddToCart = (props) => {
       
        const time = props.time
        // console.log(time)
        
        let newTime = [];

        newTime.push(time);
        // cart.push(time)
        const newNewTime = [...cart, newTime];

        // console.log(newTime);
        // const newNewTime = [...cart, newTime]
        
        
        setCart(newNewTime);

    }
    // console.log(cart);

    
//   console.log(cart);
//   console.log(typeof(cart))

    useEffect(() => {
        
        
        // console.log(cart)

        

        // let previousTime = 0
        // for(const eachTime of cart){
        //     previousTime = parseInt(eachTime) + previousTime;
        // }
        // emptyArr.push(previousTime);
        // console.log(previousTime); 
        

        // setCart(previousTime)
        // console.log(typeof(emptyArr));
        // const newArr = [...cart, emptyArr];

        

        // setCart(newArr)
    }, [])
    // console.log(cart);
    
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