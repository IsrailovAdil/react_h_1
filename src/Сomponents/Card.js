import React from 'react';
import Images from "./Images";
import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import Star from "./Star";



const Card = () => {
    return (
        <div className="card">
            <Images/>
            <div className="card-info">
                <Title/>
                <Description/>
                <Price/>
                <div>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
            </div>
        </div>
    );
};

export default Card;