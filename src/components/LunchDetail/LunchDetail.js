import React from 'react';
import { Link } from 'react-router-dom';

const LunchDetail = (props) => {
    const { img, fdName, fdDes, price, _id } = props.lunch
    return (
        <div className="foodAllDetails">
            <Link to={`/lunchFoodDetails/${_id}`}>
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

export default LunchDetail;