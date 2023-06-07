import React from 'react';
import '../CSS/topEachPage.css';
import '../CSS/Partners.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import europe from "../Images/europep.png";
import ugeneve from "../Images/Partners/Ugeneve.png";
import unipr from "../Images/Partners/UNIPR.png";
import vub from "../Images/Partners/VUB.png";
import ESOGU from "../Images/Partners/ESOGU.png";
import UPerugia from "../Images/Partners/UPerugia.png";
import ULR from "../Images/Partners/ULR.png";
import UB from "../Images/Partners/UB.png";

function Partners(){
    return(
        <>
            <div className="rectangle-nav">
                <Navbar/>
            </div>

            <div className="nav-bar-rectangle">
                <span>PARTNERS</span>
            </div>


            <div className="top-text">
                <p>37 partners from 11 European Countries covering the whole value chain of electric mobility
                    (Tier-1, Tier-2, OEMs and technology providers)
                </p>

                <img src={europe} alt="europe"/>
            </div>

            <div className="partners">
                Academic and Research partners
            </div>

            <div className="image-grid">
                <div className="image-block">
                    <a href="https://www.unige.ch/"><img src={ugeneve} alt="image1" /></a>
                </div>



                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ESOGU} alt="image1" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.unipr.it/"><img src={unipr} alt="image1" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.vub.be/en"><img src={vub} alt="image1" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.univ-larochelle.fr/"><img src={ULR} alt="image1" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.u-bourgogne.fr/"><img src={UB} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.unipg.it/"><img src={UPerugia} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
            </div>

            <div className="partners">
                Industrial partners
            </div>

            <div className="image-grid">
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>
                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="image1" /></a>
                </div>

            </div>


            <Footer/>
        </>
    )
}

export default Partners;