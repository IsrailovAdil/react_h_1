import React from 'react';
import imgP from '../assets/Q5PRP52-00-01_jpg-300x300.jpg'
import shopping from "../assets/free-icon-shopping-cart-526737.png";
import heart from '../assets/free-icon-heart-4355853.png'

import toolsIcon from '../assets/reset_6672367.png';
import infoIcon from '../assets/circle_15796349.png';
import Box from "./Box";

const Card2 = () => {
    return (
        <div className='card2'>
                <img className="img2" src={imgP} alt='робот-пылесос'/>
            <div className="card-body">
<p className='price2'>400 $</p>
                <h3>Робот-пылесос Xiomi Enchen LovClean Collection R1</h3>
 <span>Робот-пылесос Xiomi Enchen LovClean Collection R1.Высокая мощность всасывания...</span>
            </div>
            <div className='boxes'>

                <p className='box'><img src={shopping} alt="Icon"/></p>
                <p className='box'><img src={heart} alt="Icon"/></p>
                <p className='box'><img src={toolsIcon} alt="Icon"/></p>
                <p className='box'><img src={infoIcon} alt="Icon"/></p>

            </div>
        </div>
    );
};

export default Card2;