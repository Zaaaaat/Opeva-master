import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/deliverables.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function Deliverables(){
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
                <div className="wp-title">WP1 Requirement Analysis</div>
                    <ul>
                        <li> D1.1 Requirements </li>
                        <li> D1.2 Demonstrators specifications and gap analysis </li>
                        <li> D1.3 System requirements </li>
                    </ul>

                </div>

                <div className="h1-Contain">
                <div className="wp-title">WP2 Design Architecture Optimization</div>

                   <ul>
                        <li> D2.1 Preliminary results </li>
                        <li> D2.2 Main System Architecture </li>
                        <li> D2.3 Thermal cooling design </li>
                        <li> D2.4: Design optimization of charging station interfaces </li>
                        <li> D2.5: Cost-effective analysis of system architecture </li>
                   </ul>

                </div>

                <div className="h1-Contain">
                    <div className="wp-title">WP3 Battery Management System</div>

                    <ul>
                        <li> D3.1    System design for data management </li>
                        <li> D3.2    Implementation and Design of data pre-processing system </li>
                        <li> D3.3    Implementation and Design of data analysis system </li>
                        <li> D3.4    Implementation and Design of data analysis for charging stations </li>
                        <li> D3.5    Generation and collection of e-bus data </li>
                    </ul>
                </div>

                <div className="h1-Contain">
                <div className="wp-title"> WP4 Battery Management System </div>

                    <ul>
                        <li> D4.1    Data integrity protection concept and Advanced SoX algorithm </li>
                        <li> D4.2    Charge/Discharge control strategy </li>
                        <li> D4.3    Cooling concept and architecture </li>
                        <li> D4.4    Design and concept for OBC 48V system topology </li>
                    </ul>

                </div>

                <div className="h1-Contain">
                <div className="wp-title">WP5 Intelligent Energy Management</div>

                    <ul>
                        <li> D5.1    System design for Intelligent Energy Management </li>
                        <li> D5.2    Models for learning driver behaviors </li>
                        <li> D5.3    Implementation and Design of the algorithms for Intelligent Energy Management </li>
                        <li> D5.4    Implementation and Design of algorithms for smart-grid integration </li>
                    </ul>

                </div>

                <div className="h1-Contain">
                <div className="wp-title">WP6 Demonstrators</div>

                    <ul>
                        <li> D6.1    Report on the design of the demonstrators </li>
                        <li> D6.2    Presentation of the intermediate state of all demonstrators </li>
                        <li> D6.3    Presentation of all final demonstrators </li>
                        <li> D6.4    Report on the evaluation of all developed technologies presented in demonstrators </li>

                    </ul>
                </div>

                <div className="h1-Contain">
                <div className="wp-title">WP7 Dissemination, Exploitation and Communication</div>

                    <ul>
                        <li> D7.1    Project website </li>
                        <li> D7.2    Dissemination and Communication plan </li>
                        <li> D7.3    Exploitation and Sustainability Plan </li>
                        <li> D7.4    1st Report on Dissemination and Communication Activities </li>
                        <li> D7.5    Final Report on Dissemination, Communication and Standardization Activities </li>
                        <li> D7.6    1st Report on Exploitation </li>
                        <li> D7.7    Final Report on Exploitation </li>
                    </ul>

                </div>

                <div className="h1-Contain">
                <div className="wp-title">WP8 Project Management</div>

                    <ul>
                        <li> D8.1    Project Plan V1 </li>
                        <li> D8.2    Project Plan V2 </li>
                        <li> D8.3    Project Guidelines </li>
                        <li> D8.4    Project quality plan </li>
                        <li> D8.5    Project Repository </li>
                    </ul>

                </div>
            </div>

            <Footer/>
        </>
    )
}

export default Deliverables;
