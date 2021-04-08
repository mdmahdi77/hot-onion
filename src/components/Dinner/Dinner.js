import React, { useEffect, useState } from 'react';
import DinnerDetail from '../DInnerDetail/DinnerDetail';

const Dinner = () => {
    const [dinners, setDinners] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/dinner')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, [])
    return (
        <div className="food">
            {
                dinners.map(dinner => <DinnerDetail dinner={dinner}></DinnerDetail>)
            }
        </div>
    );
};

export default Dinner;