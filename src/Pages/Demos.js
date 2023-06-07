import React, { useState } from 'react';
import '../CSS/topEachPage.css';
import "@fortawesome/fontawesome-free/css/all.css";
import '../CSS/demos.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import demos1 from "../Images/Demos/demo1.png";
import demos2 from "../Images/Demos/demos2.png";
import demos3 from "../Images/Demos/demos3.png";
import demos4 from "../Images/Demos/demos4.png";
import demos5 from "../Images/Demos/demos5.png";
import demos6 from "../Images/Demos/demos6.png";
import demos7 from "../Images/Demos/demos7.png";
import demos8 from "../Images/Demos/demos8.png";
import demos9 from "../Images/Demos/demos9.png";
import demos10 from "../Images/Demos/demos10.png";

function Demos(){
    const [showCategories, setShowCategories] = useState(false);
    const [showCategories1, setShowCategories1] = useState(false);
    const [showCategories2, setShowCategories2] = useState(false);
    const [showCategories3, setShowCategories3] = useState(false);
    const [showCategories4, setShowCategories4] = useState(false);
    const [showCategories5, setShowCategories5] = useState(false);
    const [showCategories6, setShowCategories6] = useState(false);
    const [showCategories7, setShowCategories7] = useState(false);
    const [showCategories8, setShowCategories8] = useState(false);

    const toggleCategories = () => {
        setShowCategories(!showCategories);
    }

    const toggleCategories1 = () => {
        setShowCategories1(!showCategories1);
    }

    const toggleCategories2 = () => {
        setShowCategories2(!showCategories2);
    }

    const toggleCategories3 = () => {
        setShowCategories3(!showCategories3);
    }

    const toggleCategories4 = () => {
        setShowCategories4(!showCategories4);
    }

    const toggleCategories5 = () => {
        setShowCategories5(!showCategories5);
    }

    const toggleCategories6 = () => {
        setShowCategories6(!showCategories6);
    }

    const toggleCategories7 = () => {
        setShowCategories7(!showCategories7);
    }

    const toggleCategories8 = () => {
        setShowCategories8(!showCategories8);
    }

    return(
        <>


            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>DEMOS</span>
            </div>

            <div className="top-text">
                <h1>About our demos</h1>
                <p>The project achievements will be tested in 9 collaborative demonstrators.</p>
            </div>

            <div className="categories-list-design">
            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories}>
                    <i className={showCategories ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 1: Smart Integration of BMS and Multi-level converter (MLC) to achieve an efficient AC battery system</span>

                </div>
                <ul className={`categories-list ${showCategories ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos1} alt="demos1"/>
                    </li>
                </ul>
            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories1}>
                    <i className={showCategories1 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 2: Developing a Battery Pack with Smart BMS, Simulation on HIL system Test and Perform Physical Test with Battery Pack Test Machine</span>
                </div>
                <ul className={`categories-list ${showCategories1 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos2} alt="demos2"/>
                        <img src={demos3} alt="demos3"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories2}>
                    <i className={showCategories2 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 3: Improved sensors for accurate battery monitoring</span>
                </div>
                <ul className={`categories-list ${showCategories2 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos4} alt="demos4"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories3}>
                    <i className={showCategories3 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 4: Digital Twin for Performance Optimization of Electric Cars</span>
                </div>
                <ul className={`categories-list ${showCategories3 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos5} alt="demos5"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories4}>
                    <i className={showCategories4 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 5: Energy Efficient Route Planning for Last Mile Delivery</span>
                </div>
                <ul className={`categories-list ${showCategories4 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos6} alt="demos6"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories5}>
                    <i className={showCategories5 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 6: in-vehicle integration of inductive charging with BMS and power electronics</span>
                </div>
                <ul className={`categories-list ${showCategories5 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos7} alt="demos7"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories6}>
                    <i className={showCategories6 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 7: Modular batteries storage based second life EV module variants</span>
                </div>
                <ul className={`categories-list ${showCategories6 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos8} alt="demos8"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories7}>
                    <i className={showCategories7 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 8: An effective GaN-based IoT-enabled surface inductive charging system</span>
                </div>
                <ul className={`categories-list ${showCategories7 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos9} alt="demos9"/>
                    </li>
                </ul>

            </div>

            <div className="categories-container">
                <div className="categories-header" onClick={toggleCategories8}>
                    <i className={showCategories8 ? "fas fa-minus" : "fas fa-plus"}></i>
                    <span>Demo 9 : Flexible Charging Scheduler</span>
                </div>
                <ul className={`categories-list ${showCategories8 ? "open" : ""}`}>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                        <img src={demos10} alt="demos10"/>
                    </li>
                </ul>

            </div>
            </div>

            <Footer/>
        </>
    )
}

export default Demos;
