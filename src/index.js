import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './CSS/style.css';
import Home from './Pages/Home.js';
import About from './Pages/About.js';
import News from './Pages/News.js';
import Contact from './Pages/Contact.js';
import Connexion from './Pages/Connexion.js';
import reportWebVitals from "./reportWebVitals.js";
import Partner from "./Pages/Partner.js";
import Demos from "./Pages/Demos.js";
import Deliverables from "./Pages/Deliverables.js";
import Papers from "./Pages/Papers.js";
import Profil from "./Pages/Profil.js";
import AddNews from "./Pages/AddNews.js";
import EventNews from "./Pages/EventNews.js";
import MediaNews from "./Pages/MediaNews.js";
import SearchResults from "./Pages/SearchResults.js";

// import Cookies from 'js-cookie';

const root = createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/News" element={<News />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Connexion" element={<Connexion />} />
                <Route path="/Demos" element={<Demos />} />
                <Route path="/Partner" element={<Partner />} />
                <Route path="/Deliverables" element={<Deliverables />} />
                <Route path="/Papers" element={<Papers />} />
                <Route path="/Profil" element={<Profil />} />
                <Route path="/AddNews" element={<AddNews />} />
                <Route path="/EventNews" element={<EventNews />} />
                <Route path="/MediaNews" element={<MediaNews />} />
                <Route path="/search/:query" element={<SearchResults />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);

reportWebVitals();
