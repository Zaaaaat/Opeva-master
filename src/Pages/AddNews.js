import React, { useState, useEffect } from 'react';
import '../CSS/topEachPage.css';
import '../CSS/AddNews.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { database} from "../firebase.config.js";
import { set, ref, push } from "firebase/database";
import { useNavigate } from "react-router-dom";
import { ref as storageRef, uploadBytes, getDownloadURL, listAll } from "firebase/storage";
import { storage } from "../firebase.config.js";
import { format } from 'date-fns';


function AddNews() {
    const navigate = useNavigate();
    const [newsType, setNewsType] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [imageUpload, setImageUpload] = useState(null);
    const [imageURL, setImageURL] = useState("");
    const currentDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
    const [newsArray, setNewsArray] = useState([]); // Ajout du state pour les news

    useEffect(() => {
        listAll(storageRef(storage, "images/")).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    console.log(url);
                });
            });
        },[newsArray]);

        // Récupérer les données de la base de données pour les news
        const newsRef = ref(database, "news");
        const getNewsData = async () => {
            const snapshot = await database.ref(newsRef).once("value");
            const newsData = snapshot.val();

            if (newsData) {
                const newsList = Object.keys(newsData).map((key) => ({
                    id: key,
                    ...newsData[key]
                }));

                setNewsArray(newsList);
            }
        };


        getNewsData();
    }, []);

    function addNews(imageURL, description, title, type) {
        const newsRef = ref(database, "news");
        const newNewsRef = push(newsRef);
        const newsID = newNewsRef.key; // Récupérer la clé générée par push

        const currentDate = new Date().toISOString();

        return set(newNewsRef, {
            imageURL: imageURL,
            description: description,
            title: title,
            type: type,
            date: currentDate,
        }).then(() => newsID);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (isLoggedIn) {
            const description = document.getElementById("description").value;
            const title = document.getElementById("title").value;

            if (imageUpload) {
                const imageRef = storageRef(storage, `images/${imageUpload.name}`);
                uploadBytes(imageRef, imageUpload).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then((url) => {
                        addNews(url, description, title, newsType)
                            .then((newsID) => {
                                console.log("News added with ID:", newsID);
                                navigate("/News");
                            })
                            .catch((error) => {
                                console.log("Error when adding news:", error);
                            });
                    });
                });
            } else {
                alert("Please select an image.");
            }
        } else {
            alert("Please login to post an article.");
        }
    }

    function handleTypeChange(event) {
        setNewsType(event.target.value);
    }

    return (
        <>
            <div className="rectangle-nav">
                <Navbar />
            </div>

            <div className="nav-bar-rectangle">
                <span>NEW PUBLICATIONS</span>
            </div>

            <div className="formulaire">
                <div className="get">
                    <p>•○ Create publication</p>
                </div>
                <div className="question2">
                    <p>Create a post and submit for publish</p>
                </div>
            </div>

            <div className="form-container">
                <div className="form-row">
                    <div className="rect-form">
                        <div className="radio">
                            <label htmlFor="media">Media:</label>
                            <input
                                type="radio"
                                id="media"
                                name="type"
                                value="In media"
                                checked={newsType === "In media"}
                                onChange={handleTypeChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="rect-form">
                        <div className="radio">
                            <label htmlFor="event">Event:</label>
                            <input
                                type="radio"
                                id="event"
                                name="type"
                                value="In event"
                                checked={newsType === "In event"}
                                onChange={handleTypeChange}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="form-row">
                    <div className="rect-form">
                        <label htmlFor="name">Title *</label>
                        <input type="text" id="title" name="title" placeholder="Enter a title.." required />
                    </div>

                    <div className="rect-form">
                        <label htmlFor="name">Add image *</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(event) => {
                                setImageUpload(event.target.files[0]);
                            }}
                            required
                        />
                    </div>
                </div>

                <div className="rect-form">
                    <label htmlFor="email">Description *</label>
                    <textarea id="description" name="description" required></textarea>
                </div>

                <div className="form-row">
                    <button type="submit" onClick={handleSubmit}>ADD POST</button>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default AddNews;
