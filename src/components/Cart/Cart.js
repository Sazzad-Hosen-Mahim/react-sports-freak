import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const previousTime = props.cart;
    // console.log(arr);
    let sum = 0;
    for(const totalTime of previousTime){
        sum = parseInt(sum) + parseInt(totalTime);
    }
    console.log(sum)
    
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

            {/* coach info end  */}

            <h2>Add a break: </h2>
            <button className='btn-break'>10 m</button>
            <button className='btn-break'>20 m</button>
            <button className='btn-break'>30 m</button>
            <button className='btn-break'>40 m</button>

            <h2>Gameplay details:</h2>
            <h4>Game Time: {sum}</h4>
            <h4>Break: </h4>

            <button className='btn-game'>Game Played</button>
            
        </div>
    );
};

export default Cart;