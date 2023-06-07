import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/deliverables.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function Papers(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>Deliverables</span>
            </div>

            <div className="deliverables-container">

                <div className="h1-Contain">
                    <div className="wp-title">Published papers</div>
                    <ul>
                        <li> <a href="" className="name"> Exemple-1.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-2.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-3.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-4.pdf </a> </li>
                    </ul>

                </div>

                <div className="h1-Contain">
                    <div className="wp-title">Presentations</div>

                    <ul>
                        <li> <a href="#" className="name"> Exemple-1.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-2.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-3.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-4.pdf </a> </li>
                        <li> <a href="#" className="name"> Exemple-5.pdf </a> </li>
                    </ul>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default Papers;
