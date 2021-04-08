import React from 'react';
import { Link } from 'react-router-dom';

const DinnerDetail = (props) => {
    const { img, fdName, fdDes, price, _id} = props.dinner
    return (
        <div className="foodAllDetails">
            <Link to={`/dinnerFoodDetails/${_id}`}>
                <div className="foodDetail">
                    <img src={img} alt="" />
                    <h3>{fdName}</h3>
                    <p>{fdDes}</p>
                    <h4>${price}</h4>
                </div>
            </Link>
        </div>
    );
};

export default DinnerDetail;