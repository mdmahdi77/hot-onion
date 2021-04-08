import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import logo from '../../images/logo2.png';
import './Header.css'


const Header = () => {
    return (
        <div>
            <div className="headerSection">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="navBar">
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/login">Sign Up</Link>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="backgroundSection">
                <h1 className="backgroundHeader">Best Food Waiting Your Belly</h1>
                <form action="">
                    <input type="text" name="" id=""/>
                    <input type="submit" value="Search"/>
                </form>
            </div>
            <div className="foodSection">
                <ul>
                    <li>
                        <Link to="/breakfast">Breakfast</Link>
                    </li>
                    <li>
                        <Link to="/lunch">Lunch</Link>
                    </li>
                    <li>
                        <Link to="/dinner">Dinner</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;