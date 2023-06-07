import React, { useEffect, useState } from 'react';
import { database } from "../firebase.config.js";
import { ref, get} from "firebase/database";
import '../CSS/topEachPage.css';
import '../CSS/news.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function MediaNews() {
    const [newsList, setNewsList] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

    useEffect(() => {
        const newsRef = ref(database, "news");

        // Récupérer les données des news depuis la base de données
        get(newsRef).then((snapshot) => {
            if (snapshot.exists()) {
                const newsData = snapshot.val();

                const newsArray = [];
                snapshot.forEach((childSnapshot) => {
                    const news = childSnapshot.val();
                    const imageURL = news.imageURL;
                    const description = news.description;
                    const date = news.date;
                    const title = news.title;
                    const type = news.type;

                    if (type === "In media") { // Filtrer les news de type "media"
                        newsArray.push({ imageURL, description, date, type, title });
                    }
                });

                setNewsList(newsArray);
            }
        });
    }, []);

    return (
        <>
            <div className="rectangle-nav">
                <Navbar />
            </div>

            <div className="nav-bar-rectangle">
                <span>MEDIAS</span>
            </div>

            <div className="container">
                <div className="blockdivbardav">
                    {newsList.map((news, index) => (
                        <div className="news-section" key={index}>
                            <div className="news-block">
                                <img src={news.imageURL} alt="Image de la news" />
                            </div>
                            <div className="news-details">
                                <h2 className="title">{news.title}</h2>
                                <p className="description">{news.description}</p>
                                <hr className="dotted-line" />
                                <div className="moreabout">
                                    <p className="know-more">{news.type}</p>
                                    <p className="date">{news.date}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="sidebar">
                    <label htmlFor="keyword">SEARCH :</label>
                    <div className="search">
                        <input type="text" id="keyword" placeholder="Enter keywords..." />
                        <button id="search-button">Search</button>
                    </div>
                    <div className="categories">
                        <h3>Categories</h3>
                        <hr/>
                        <ul>
                            <div className="line1">
                                <a href="/EventNews"> <li>In Event</li> </a>
                                <a href="/News"> <li>All</li> </a>
                            </div>
                            <div className="line">
                                {isLoggedIn && <a href="/AddNews"> <li>New post</li> </a>}
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MediaNews;
