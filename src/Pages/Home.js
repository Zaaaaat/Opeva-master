import React, { useEffect, useState, useRef } from 'react';
import { ref, get } from 'firebase/database';
import { database } from "../firebase.config.js";
import { format } from 'date-fns';

import '../CSS/home.css';

import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import PreFooter from '../components/PreFooter.js';


import logo from "../Images/logo-opeva.jpg";
import lab from "../Images/lab.png";
import map from "../Images/map.png";
import cal from "../Images/calendar.png";
import top from "../Images/to_top.png";
import stat from "../Images/stat.png";
import cross from "../Images/cross.png";
import plus from "../Images/plus.png";


import { useNavigate } from "react-router-dom";

function Home(){

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedNews, setSelectedNews] = useState(null);
    const [latestNews, setLatestNews] = useState([]);
    const appRootRef = useRef(null);



    const handleNewsClick = (news) => {
        setSelectedNews(news);
        setIsPopupOpen(true);
    };


    useEffect(() => {
        const newsRef = ref(database, 'news');

        get(newsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const newsData = snapshot.val();

                const newsArray = [];

                Object.entries(newsData).forEach(([newsID, news]) => {
                    const { imageURL, description, date, title, type } = news;

                    newsArray.push({ id: newsID, imageURL, description, date, title, type });
                });

                newsArray.sort((a, b) => new Date(b.date) - new Date(a.date));
                const latestNews = newsArray.slice(0, 2);

                const formattedLatestNews = latestNews.map((news) => ({
                    ...news,
                    date: format(new Date(news.date), 'yyyy-MM-dd'),
                }));

                setLatestNews(formattedLatestNews);
            }
        });
    }, []);


    return (
        <>
            <Navbar/>
            <div className="background-image">
                <div className="background-image-blur"></div>
                <div className="background-image-content">
                    <div className="overlay">
                        <div className="centered">
                            <h1>Optimization of Electric <br /> Vehicle Autonomy</h1>
                            <div className="circle-container">
                                <div className="circle">
                                    <p>37</p>
                                    <p>Partners</p>
                                </div>
                                <div className="circle">
                                    <p>9</p>
                                    <p>Countries</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="image-text">
                        <p>Opeva European Project</p>
                        
                    </div>
                </div>
            </div>

            <section className="mid">
                <p className="about-text">• about the project</p>
            </section>

            <section className="about">
                <div>
                    <div className="container">

                    <div className="left-container">
                            <img src={logo} alt="my image" />
                    </div>

                        <div className="right-container">
                        <div className="text-container">
                            <h2>To optimization the electric vehicule autonomy</h2>
                            <p>The main objective of OPEVA is to improve EV market penetration and widespread adoption by tackling the limiting psychological factors such as range anxiety, high price, limited charging facilities, and duration of charging. The project will be coordinated by Pertimm Developpement and it is co-sponsored by Key Digital Technology Joint Undertaking , the program Horizon Europe and the National authorities of the participating countries.</p>
                        </div>


                        <div className="allsquares">
                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Energy-efficient power train</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>

                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Energy-efficient dynamic routing</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>

                            <div className="square">
                                <a href="about">
                                    <div className="square-text">Accurate range prediction</div>
                                    <div className="square-hover">
                                        <img src={plus} alt="know more"/>
                                        <span>know more</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        </div>

                </div>
                </div>
            </section>

            <section className="mid">
                <p className="about-text">• about the project</p>
            </section>

            <section className="bot">
                    <div className="hex-container">

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={lab} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">1</div>
                                <div className="hex-text">Partners</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={map} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">2</div>
                                <div className="hex-text">Countries</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={cal} alt="know more"/>

                            </div>
                            <div className="foothex">
                                <div className="hex-number">3</div>
                                <div className="hex-text">Starting</div>
                                <div className="hex-text">(01/01/2023)</div>
                            </div>
                        </div>

                        <div className="columnhex">
                            <div className="hex">
                                <div className="hexoverlay"></div>
                                <img src={stat} alt="know more"/>
                            </div>
                            <div className="foothex">
                                <div className="hex-number">4</div>
                                <div className="hex-text">MЄ total budget</div>
                            </div>
                        </div>
                    </div>
            </section>

            <div id="scrollUp">
                <a href="#top"><img src={top}/></a>
            </div>

            <section className="botnews">
                <p className="news-text">What are the recent news...</p>
                <div className="blockdivbardav">

                    {latestNews.length > 0 && latestNews.map((news, index) => (
                    <div className="news-section" key={index} onClick={() => handleNewsClick(news)}>

                            <div className="news-block">
                            <img className="imageeee" src={news.imageURL} alt="Image de la news" />
                            </div>


                            <div className="news-details">
                                <h2 className="title">{news.title}</h2>
                                <hr className="dotted-line" />
                                <div className="moreabout">
                                    <p className="know-more">{news.type}</p>
                                    <p className="date">{news.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}

                    {isPopupOpen && selectedNews && (
                        <div className="popup" ref={appRootRef}>
                            <div className="popup-background" />
                            <div className="popup-content">
                                <div className="news-block">
                                    <div className="close-button" onClick={() => setIsPopupOpen(false)}>
                                        <img src={cross} alt={cross}></img>
                                    </div>
                                    <img className="imageeee" src={selectedNews.imageURL} alt="Image de la news"  />
                                </div>
                                <h2 className="title">{selectedNews.title}</h2>
                                <p className="description">{selectedNews.description}</p>
                                <hr className="dotted-line" />
                                <div className="moreabout">
                                    <p className="know-more">{selectedNews.type}</p>
                                    <p className="date">{selectedNews.date}</p>
                                </div>
                               </div>
                        </div>
                    )}


                </div>
            </section>

            <PreFooter/>
            <Footer/>
        </>
    )
}

export default Home;