import React from 'react';
import "./NavigationBars.css";
import {Link} from "react-router-dom";

export const Navigation = () => {
    return (
        <div className="main">
            <Link to="/">Home</Link>
            <Link to="/Services">Services</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/About">About</Link>
            
        </div>
    );
};

