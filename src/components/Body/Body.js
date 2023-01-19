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
        <div className='full-container'>
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

        <h2 className='h2'>Q & A section: </h2>
        <div className='q-a'>
            <div>
            <h3>1. How does React work?</h3>
            <p>React creates 2 DOM to compare the state changes. ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.

Returned React elements determine how the UI will look at the client end.</p>
            </div>
            <div>
                <h3>2. Write the differences between Props and State</h3>
                <p><b>Props</b> are known as properties it can be used to pass data from one component to another. Props cannot be modified, read-only, and Immutable.
                <br />
                <br />
                <b>The state </b> represents parts of an Application that can change. Each component can have its State. The state is Mutable and It is local to the component only.
                </p>
            </div>
            <div >
                <h3>3. In what purpose useEffect used except data load?</h3>
                <p>In this purpose useEffect are used:
                    <ul >
                    <li>Running on state change: validating input field</li>
                    <li>Running on state change: live filtering</li>
                    <li>Running on state change: trigger animation on new array value</li>
                    <li>Running on props change: update paragraph list on fetched API data update</li>
                    <li>Running on props change: updating fetched API data to get BTC updated price</li>
                    </ul></p>
            </div>
        </div>
        </div>
    );
};

export default Body;