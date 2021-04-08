import React, { useEffect, useState } from 'react';
import LunchDetail from '../LunchDetail/LunchDetail';

const Lunch = () => {
    const [lunchs, setLunchs] = useState([])

    useEffect(() => {
        fetch('http://localhost:8088/lunch')
            .then(res => res.json())
            .then(data => setLunchs(data))
    }, [])
    return (
        <div className="food">
            {
                lunchs.map(lunch => <LunchDetail lunch={lunch}></LunchDetail>)
            }
        </div>
    );
};

export default Lunch;