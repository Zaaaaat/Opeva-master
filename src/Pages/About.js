import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/overview.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import img from '../Images/overview.png';
import WP from '../Images/WP.png';

function About(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>OVERVIEW</span>
            </div>

            <section className="mid">
                <p className="about-text">• about the project</p>
            </section>

            <section>
            <div className="container-ow">
                <div className="img-container">
                    <img src={img} alt="about" />
                </div>
                <div className="text-container">
                    <h2>To optimization the electric vehicule autonomy</h2>
                    <p>The main objective of the OPEVA project is to explore the benefits that can be obtained from the interaction between the multiple actors involved in the modern “mobility experience” in order to optimize the autonomy of electric vehicles in a modern world which also requires consider sustainability and resource optimization.
                        This translates into developing an energy-efficient power train and dynamic routing, into improving accurate range prediction techniques, improving EV grid integration, developing efficient charging technologies and guaranteeing a wider EV adoption. To accelerate the deployment of sustainable electric vehicles (EV) and improve EV market penetration, the project aims to develop technological solutions involving the overall ecosystem, thereby addressing limiting psychological factors such as range anxiety, high price, limited charging facilities, and duration of charging.
                        The OPEVA will contribute to the key application area on Mobility and a number of major long-term challenges including embedded software, edge computing and embedded artificial intelligence. The project identifies six technology domains, involving 23 key technologies, and four non-technical domains which must be developed to move from conventional EVs to sustainable EVs.
                        The project achievements will be tested in 9 collaborative demonstrators.</p>
                    </div>
            </div>
            </section>

            <section>
                <div className="text-obj">
                    <h2>Our Objectives</h2>

                    <div className="blocks-container">
                        <div className="blockx31">
                        <div className="block v">
                            <h3>Energy-efficient power train</h3>
                            <p>
                                Improve the energy efficiency (by 10%) of the powertrain, considering intelligent battery integration, power electronics, advanced modeling and control combined with artificial intelligence (AI)  echniques.
                            </p>
                        </div>
                        <div className="block e">
                            <h3>Energy-efficient dynamic routing</h3>
                            <p>
                                Reduce (by 10%) energy consumption by enabling the dynamic routing profile taking into account both external factors of off-vehicle data (weather, road profile, traffic
                                information, …) and internal vehicle and driver factors (SoC and SoH, driver profile, vehicle power consumption, …).
                            </p>
                        </div>
                        <div className="block v">
                            <h3>Accurate range prediction</h3>
                            <p>
                                Increase (by 10%) the predicted range of electric vehicles by merging internal data (enhanced SoX battery monitoring, auxiliary power consumption, driver profile, …) and external data (weather, road profile, traffic information, …) using safe and secure data acquisition technologies in and out of the vehicle.
                            </p>
                        </div>
                        </div>
                        <div className="blockx32">
                        <div className="block e">
                            <h3>Improved EV grid integration</h3>
                            <p>
                                Safer and more efficient integration of large volumes of electric vehicles into the grid with reduced waiting time (by 10%) through new vehicle-to-grid (V2G) interactions and smart charging strategies and management systems
                                (improved grid planning and
                                operations).
                             </p>
                        </div>
                        <div className="block v">
                            <h3>Efficient charging technologies</h3>
                            <p>
                                Reduce average charging time (by 10%) through advanced technologies (inductive charging, wireless batteries, and sensing and diagnostic technologies)
                            </p>
                        </div>
                        <div className="block e">
                            <h3>Wider EV adoption</h3>
                            <p>
                                Improving the science and technology, research, innovation and marketing  capacity in EV penetration  aligned with the European priorities to achieve CO2 neutral, sustainable mobility, enabling  electrification, strengthened with dissemination, exploitation and
                                outreach activities
                            </p>
                        </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mid">
                <p className="about-text">• project structure</p>
            </section>

            <section>
                <div className="text-obj">
                    <h2>The project is structured into 8 work packages:</h2>
                </div>
            </section>

            <section>
                <div className="grid">


                <div className="grid-container">

                    <div className="rounds3">

                    <div className="grid-item">
                        <div className="NameWP">
                            <p>Requirement Analysis</p>
                        </div>
                        <div className="round bluee"><span className="textt">WP1</span></div>

                    </div>

                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Battery Management System</p>
                            </div>
                            <div className="round greenn"><span className="textt">WP4</span></div>

                        </div>

                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Demonstrators</p>
                            </div>
                            <div className="round greenn"><span className="textt">WP6</span></div>

                        </div>

                    </div>

                    <div className="rounds32">

                        <div className="grid-item">
                            <div className="round greenn"><span className="textt">WP2</span></div>
                            <div className="NameWP">
                                <p>Design Architecture Optimization</p>
                            </div>
                        </div>

                    <div className="grid-item">
                        <div className="round greenn"><img src={WP} alt="round green"/></div>
                    </div>

                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Dissemination, Exploitation and Communication</p>
                            </div>
                            <div className="round bluee"><span className="textt">WP7</span></div>

                        </div>

                    </div>

                    <div className="rounds33">
                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Smart Data Management</p>
                            </div>
                            <div className="round bluee"><span className="textt">WP3</span></div>

                        </div>
                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Intelligent Energy Management</p>
                            </div>
                            <div className="round greenn"><span className="textt">WP5</span></div>

                        </div>
                        <div className="grid-item">
                            <div className="NameWP">
                                <p>Project Management</p>
                            </div>
                            <div className="round greenn"><span className="textt">WP8</span></div>

                        </div>
                    </div>
                </div>

                </div>
            </section>


            <Footer/>
        </>
    )
}

export default About;
