import { faSoccerBall } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2> <FontAwesomeIcon color='white' icon={faSoccerBall}/> Sports Freak</h2>
            
        </div>
    );
};

export default Header;