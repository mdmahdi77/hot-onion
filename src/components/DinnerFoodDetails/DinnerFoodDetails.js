import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const DinnerFoodDetails = () => {
    const {dinnerId} = useParams()

    const [dinnersDetails, setDinnerDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/dinner')
            .then(res => res.json())
            .then(data => setDinnerDetails(data))
    }, [])

    const dinnerDetail = dinnersDetails.find(dinner => dinner._id === dinnerId)
    return (
        <div className="foodFlex">
        <div className="foodDetailStyle">
            <h2>{dinnerDetail?.fdName}</h2>
            <p>{dinnerDetail?.fdDescription}</p>
            <h3>${dinnerDetail?.price}</h3>
            <button className="mainBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
        </div>
        <div className="foodDetailImg">
            <img src={dinnerDetail?.img} alt=""/>
        </div>
    </div>
    );
};

export default DinnerFoodDetails;