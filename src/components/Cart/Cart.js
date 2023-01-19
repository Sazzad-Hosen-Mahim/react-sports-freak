import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const [breaks, setBreaks] = useState([])
    const previousTime = props.cart;
    
    let sum = 0;
    for(const totalTime of previousTime){
        sum = parseInt(sum) + parseInt(totalTime);
    }

    

    

   const handleButtonClick = (minute) => {
    const min = minute;
    localStorage.setItem('break', JSON.stringify(min))
        setBreaks(minute);

   }

   useEffect(()=> {
    let getItem = localStorage.getItem('break');
    const parsedGetItem = JSON.parse(getItem);
    console.log(parsedGetItem)
    setBreaks(parsedGetItem);

   },[])



   
    
    return (
        <div className='cart-container'>
            <h3>Coach: Sazzad Mahim</h3>

            <div className='coach-info'>
                <div className='margiin'>
                <h3>65 kg</h3>
                <p>Weight</p>
                </div>
                <div className='margiin'>
                    <h3>5.5</h3>
                    <p>Height</p>
                </div>
                <div className='margiin'>
                    <h3>23</h3>
                    <p>Age</p>
                </div>

            </div>

           

            <h2>Add a break: </h2>
            <button onClick={() => handleButtonClick(10)} className='btn-break'>10 m</button>
            <button onClick={() => handleButtonClick(20)} className='btn-break'>20 m</button>
            <button onClick={() => handleButtonClick(30)} className='btn-break'>30 m</button>
            <button onClick={() => handleButtonClick(40)} className='btn-break'>40 m</button>

            <h2 className='game-play'>Game Play details:</h2>
            <h4>Game Time: {sum}</h4>
            <h4>Break: {breaks}</h4>

            <button className='btn-game'>Game Played</button>
            
        </div>
    );
};

export default Cart;