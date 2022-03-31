import React from 'react';
import '../Styles/Home.css'
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className="container1">
            <p className="title">तपाईँलाई चटपट कर्नरमा स्वागत छ</p>
            <Link to="/cook" className="cookB"> Cook </Link>
            <Link to="/cashier" className="cashierB">Cashier</Link>
        </div>
    );
}

export default Home; 