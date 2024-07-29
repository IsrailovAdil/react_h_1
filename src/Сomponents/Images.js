import React from 'react';
import img1 from '../assets/rectangle-39.png';
import shopping from '../assets/free-icon-shopping-cart-711897.png'

const Images = () => {

    return (
    <div className="image-container">
        <img className="img1" src={img1} alt='wewr'/>
            <div className="icon">
                <img src={shopping} alt="Icon"/>
            </div>
    </div>
    );
};

export default Images;