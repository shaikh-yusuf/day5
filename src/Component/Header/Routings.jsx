import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Navigation} from './Navigation';
import {Home} from './Home';
import {Services} from './Services';
import {Contact} from './Contact';
import {About} from './About';

export const Routings = () => {
    return (
        <div>
            <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Services" element={<Services/>} />
                <Route path="/Contact" element={<Contact/>} />
                <Route path="/About" element={<About/>} />
            
               
               
            </Routes>
            </BrowserRouter>
        </div>
    );
};

