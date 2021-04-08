import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const LunchFoodDetails = () => {
    const {lunchId} = useParams()

    const [lunchsDetails, setLunchsDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/lunch')
            .then(res => res.json())
            .then(data => {
                setLunchsDetails(data)
                console.log(data)
            })
    }, [])

    const lunchDetail = lunchsDetails.find(fdd => fdd._id === lunchId)
    console.log(lunchDetail)
    return (
        <div className="foodFlex">
            <div className="foodDetailStyle">
                <h2>{lunchDetail?.fdName}</h2>
                <p>{lunchDetail?.fdDescription}</p>
                <h3>${lunchDetail?.price}</h3>
                <button className="mainBtn"><FontAwesomeIcon icon={faShoppingCart} /> Add</button>
            </div>
            <div className="foodDetailImg">
                <img src={lunchDetail?.img} alt=""/>
            </div>
        </div>
    );
};

export default LunchFoodDetails;