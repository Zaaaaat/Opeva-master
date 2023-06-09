import React, { useState } from 'react';
import '../CSS/footer.css';
import bpi from "../Images/bpi.png";
import europe from "../Images/europe.png";
import suisse from "../Images/suisse.png";
import { useNavigate } from "react-router-dom";

function Footer() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/");
    };

    return (
        <footer>
            <div className="footer-container">
                <div className="who">
                    <h3>Who I am...</h3>
                    <p>European project OPeva</p>
                </div>

                <div className="footer-section">
                    <p>Funded within the Key Digital Technologies Joint Undertaking (KDT JU)
                        from the European Union’s Horizon Europe Programme and the National Authorities,
                        under grant agreement 101097267.</p>
                </div>

                <div className="logo-footer">
                    <div className="footer-section5">
                        <h3>Partially Funded By:</h3>
                        <div className="footer-sectionblock">
                            <div className="footer-section3">
                                <img src={bpi} alt="bpi 1" />
                            </div>
                            <div className="footer-section4">
                                <img src={europe} alt="europe 2" />
                            </div>
                        </div>
                    </div>
                    <div className="footer-section2">
                        <img src={suisse} alt="suisse 3" />
                    </div>
                </div>
            </div>

            <div className="footer-bar">
                <div className="footer-press">
                <p>OPEVA - OPtimization of Electric Vehicle Autonomy</p>
                <a href="https://drive.google.com/file/d/1iLctdFMaVSUl-BOoxylbdQV14N2GJpud/view?usp=sharing" target="_blank" rel="noopener noreferrer">PRESS RELEASE</a>

                </div>
                {isLoggedIn ? (
                        <ul>
                            <li>
                                <a href="/Profil">Profil</a>
                            </li>
                            <li>
                                <a href="#" onClick={handleLogout}>Logout</a>
                            </li>
                        </ul>
                ) : (
                    <a href="/Connexion">CONNEXION</a>
                )}
            </div>
        </footer>
    );
}

export default Footer;
