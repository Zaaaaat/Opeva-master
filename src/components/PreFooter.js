import plus from "../Images/plus.png";
import ugeneve from "../Images/Partners/Ugeneve.png";
import vub from "../Images/Partners/VUB.png";
import ESOGU from "../Images/Partners/ESOGU.png";
import UPerugia from "../Images/Partners/UPerugia.png";
import ULR from "../Images/Partners/ULR.png";
import UB from "../Images/Partners/UB.png";
import UNIPR from "../Images/Partners/UNIPR.png";
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

import { useNavigate } from "react-router-dom";

function PreFooter(){

    
    const partnerImages = [
        ESOGU,
        UB,
        ULR,
        UNIPR,
        UPerugia,
        ugeneve,
        vub,
        ifak,
        isep,
        TUG,
        UWB,
        VV,
        pertimm,
        acd,
        certx,
        togi,
        serma,
        ai4,
        cisc,
        ortem,
        bitnet,
        inovasyon,
        ERARGE,
        CWD,
        powerdale,
        INL,
        musoshi,
        icharging,
        ALKE,
        ERG,
        SENSI,
        LUNA,
        FLASH,
        AX,
        AIS,
        NXP
    ];

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }

    const shuffledImages = shuffleArray(partnerImages);
    const randomPartnerImages = shuffledImages.slice(0, 4);


return (
<section className="partner-section">
                <div className="partner-container">

                    <div className="titre-partenaires">
                        <h2>Our Partners...</h2>
                    </div>


                    <div className="allsquares">
                        {randomPartnerImages.map((image, index) => (
                            <div className="square" key={index}>
                                <a href="Partner">
                                    <div className="img-squaree">
                                        <img src={image} alt="my image" />
                                    </div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>More partners</span>
                                    </div>
                                </a>
                            </div>
                        ))}

                            <div className="square">
                                <a href="Partner">
                                    <div className="img-squaree">
                                        <p> See our partners </p>
                                    </div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>More partners</span>
                                    </div>
                                </a>
                            </div>
                    </div>

                </div>
            </section>
        )   
    };

export default PreFooter;
