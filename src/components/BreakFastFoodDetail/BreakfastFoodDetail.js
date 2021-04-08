import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './BreakfastFoodDetail.css';

const BreakfastFoodDetail = () => {
    const { breakfastId } = useParams()

    const [foodDetails, setFoodDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/breakfast')
            .then(res => res.json())
            .then(data => {
                setFoodDetails(data)
            })
    }, [])

    const foodDetail = foodDetails.find(fd => fd._id === breakfastId)


    const history = useHistory()
    const handleAdding = () => {
        history.push(`/cartShipment}`)
    }

    return (
        <div className="foodFlex">
            <div className="foodDetailStyle">
                <h2>{foodDetail?.fdName}</h2>
                <p>{foodDetail?.fdDescription}</p>
                <h3>${foodDetail?.price}</h3>
                <button className="mainBtn" onClick={handleAdding()}><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
            </div>
            <div className="foodDetailImg">
                <img src={foodDetail?.img} alt=""/>
            </div>
        </div>
    );
};

export default BreakfastFoodDetail;