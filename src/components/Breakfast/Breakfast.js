import React, { useEffect, useState } from 'react';
import BreakfastDetail from '../BreakfastDetail/BreakfastDetail'
import './Breakfast.css'

const Breakfast = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/breakfast')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    return (
        <div className="food">
            {
                foods.map(food => <BreakfastDetail food={food}></BreakfastDetail>)
            }
        </div>
    );
};

export default Breakfast;