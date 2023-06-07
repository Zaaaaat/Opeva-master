import React, { useEffect, useState } from 'react';
import { database } from "../firebase.config.js";
import { ref, get} from "firebase/database";
import '../CSS/topEachPage.css';
import '../CSS/news.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function News() {
    const [newsList, setNewsList] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");


    function handleSearch(event) {
        setSearchTerm(event.target.value);
    }


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

                    newsArray.push({ imageURL, description, date, title, type });
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
                <span>NEWS & EVENTS</span>
            </div>

            <div className="container">
                <div className="blockdivbardav">
                    {newsList
                        .filter((news) => news.title.includes(searchTerm)) // Filtre les actualités dont le titre contient le terme de recherche
                        .map((news, index) => (
                            <div className="news-section" key={index}>
                                <div className="news-block">
                                    <div className="news-image">
                                        <img className="imageeee" src={news.imageURL} alt="Image de la news" />
                                    </div>
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
                        <input type="text" id="keyword" placeholder="Enter keywords..." value={searchTerm} onChange={handleSearch} />
                        <button id="search-button">Search</button>
                    </div>
                    <div className="categories">
                        <h3>Categories</h3>
                        <hr/>
                        <ul>
                            <div className="line1">
                                <a href="/EventNews"> <li>In Event</li> </a>
                                <a href="/MediaNews"> <li>In Media</li> </a>
                            </div>
                            <div className="line">
                                <a href="/AddNews"> <li>New post</li> </a>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default News;