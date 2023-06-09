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
import ifak from "../Images/Partners/ifak.png";
import isep from "../Images/Partners/isep.png";
import TUG from "../Images/Partners/TUG.png";
import UWB from "../Images/Partners/UWB.png";
import VV from "../Images/Partners/VV.png";
import pertimm from "../Images/Partners/pertimm.png";
import acd from "../Images/Partners/acd.jpg";
import certx from "../Images/Partners/certx.png";
import togi from "../Images/Partners/togi.png";
import serma from "../Images/Partners/serma.png";
import ai4 from "../Images/Partners/ai4.png";
import cisc from "../Images/Partners/cisc.png";
import ortem from "../Images/Partners/ortem.png";
import bitnet from "../Images/Partners/bitnet.png";
import inovasyon from "../Images/Partners/Inovasyon.png";
import ERARGE from "../Images/Partners/ERARGE.png";
import CWD from "../Images/Partners/CWD.png";
import powerdale from "../Images/Partners/powerdale.png";
import INL from "../Images/Partners/INL.png";
import musoshi from "../Images/Partners/Musoshi.png";
import icharging from "../Images/Partners/icharging.png";
import ALKE from "../Images/Partners/alke.png";
import ERG from "../Images/Partners/erg.png";
import SENSI from "../Images/Partners/Sensichips.png";
import LUNA from "../Images/Partners/LGE.png";
import FLASH from "../Images/Partners/FlashBat.jpg";
import AX from "../Images/Partners/AX.jpg";
import AIS from "../Images/Partners/AIS.png";
import NXP from "../Images/Partners/NXP.png";

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
                    <a href="https://www.unige.ch/"><img src={ugeneve} alt="ugeneve" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ESOGU} alt="ESOGU" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.unipr.it/"><img src={unipr} alt="unipr" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.vub.be/en"><img src={vub} alt="vub" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.univ-larochelle.fr/"><img src={ULR} alt="ULR" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.u-bourgogne.fr/"><img src={UB} alt="UB" /></a>
                </div>
                
                <div className="image-block">
                    <a href="https://www.unipg.it/"><img src={UPerugia} alt="UPerugia" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ogu.edu.tr/"><img src={ugeneve} alt="ugeneve" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ifak.eu/de"><img src={ifak} alt="ifak" /></a>
                </div>
                
                <div className="image-block">
                    <a href="https://www.tugraz.at/home"><img src={TUG} alt="TUG" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.isep.ipp.pt/"><img src={isep} alt="isep" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.zcu.cz/cs/index.html"><img src={UWB} alt="UWB" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.v2c2.at/"><img src={VV} alt="VV" /></a>
                </div>
            </div>

            <div className="partners">
                Industrial partners
            </div>

            <div className="image-grid">
                <div className="image-block">
                    <a href="https://www.pertimm.com/"><img src={pertimm} alt="pertimm" /></a>
                </div>

                <div className="image-block">
                    <a href="https://certx.com/"><img src={certx} alt="certx" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.acd.com.tr/"><img src={acd} alt="acd" /></a>
                </div>

                <div className="image-block">
                    <a href="https://togitek.com/"><img src={togi} alt="togi" /></a>
                </div>
VV
                <div className="image-block">
                    <a href="https://www.cisc.at/"><img src={cisc} alt="cisc" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ai4sec.eu/"><img src={ai4} alt="ai4" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ortem.com.tr/"><img src={ortem} alt="ortem" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.serma-energy.com/"><img src={serma} alt="serma" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.musoshi.com/"><img src={musoshi} alt="musoshi" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.inovasyonmuhendislik.com/"><img src={inovasyon} alt="inovasyon" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.ergun.com.tr/"><img src={ERARGE} alt="ERARGE" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.bitnet.com.tr/"><img src={bitnet} alt="bitnet" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.powerdale.com/fr"><img src={powerdale} alt="powerdale" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.cleanwatts.energy/"><img src={CWD} alt="CWD" /></a>
                </div>

                <div className="image-block">
                    <a href="https://i-charging.pt/"><img src={icharging} alt="image1" /></a>
                </div>

                <div className="image-block">
                    <a href="https://inl.int/"><img src={INL} alt="INL" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.alke.com/"><img src={ALKE} alt="ALKE" /></a>
                </div>

                <div className="image-block">
                    <a href="http://www.ergtech.eu/"><img src={ERG} alt="ERG" /></a>
                </div>

                <div className="image-block">
                    <a href="https://sensichips.com/"><img src={SENSI} alt="SENSI" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.lunageber.com/"><img src={LUNA} alt="LUNA" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.flashbattery.tech/"><img src={FLASH} alt="FLASH" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.loxo.ch/en/"><img src={AX} alt="AX" /></a>
                </div>

                <div className="image-block">
                    <a href="http://www.ais-brno.cz/"><img src={AIS} alt="AIS" /></a>
                </div>

                <div className="image-block">
                    <a href="https://www.nxp.com/"><img src={NXP} alt="NXP" /></a>
                </div>

            </div>


            <Footer/>
        </>
    )
}

export default Partners;