import React from 'react';
import breakfast from '../../src/dinner/MOCK_DATA.json'

const Invent = () => {
    const handleFood = () => {
        fetch('http://localhost:8088/addDinner', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(breakfast)
        })
    }
    return (
        <div>
            
        </div>
    );
};

export default Invent;