import React, { useEffect, useState } from 'react';
import { database } from "../firebase.config.js";
import { ref, get, child, forEach } from "firebase/database";
import { useParams } from "react-router-dom";
import '../CSS/topEachPage.css';
import '../CSS/news.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

function SearchResults() {
    const [newsList, setNewsList] = useState([]);
    const { query } = useParams();

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

    const filteredNews = newsList.filter((news) =>
        news.title.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <div className="rectangle-nav">
                <Navbar />
            </div>

            <div className="nav-bar-rectangle">
                <span>SEARCH RESULTS</span>
            </div>

            <div className="container">
                <div className="blockdivbardav">
                    {filteredNews.map((news, index) => (
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
            </div>

            <Footer />
        </>
    )
}

export default SearchResults;
