import React, { useEffect, useState } from 'react';
import '../CSS/navbar.css';
import Logo from "../Images/opeva.png";
import Loupe from "../Images/magnifying-glass.png";
import BurgerMenu from "../Images/menu.png";
import CloseMenu from "../Images/cross.png";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");
    const [isOpen, setIsOpen] = useState(false);

    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
        navigate("/");
    };

    const handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.search.value;
        window.location.href = `/search/${searchQuery}`;
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        const navLinks = document.querySelector(".nav_links");
        navLinks.classList.toggle("open");
        const burgerIcon = document.getElementById("burger");
        burgerIcon.classList.toggle("open");
        const body = document.querySelector("body");
        if (navLinks.classList.contains("open")) {
            burgerIcon.src = CloseMenu;
            body.style.overflowY = "hidden";
        } else {
            burgerIcon.src = BurgerMenu;
            body.style.overflowY = "scroll";
        }
    }

    useEffect(() => {
        const navLinks = document.querySelector(".nav_links");
        const navLinksList = document.querySelectorAll(".nav_links ul li a");
        const burgerIcon = document.getElementById("burger");
        const body = document.querySelector("body");

        burgerIcon.addEventListener("click", () => {
            navLinks.classList.toggle("open");
            burgerIcon.classList.toggle("open");
            if (navLinks.classList.contains("open")) {
                burgerIcon.src = CloseMenu;
                body.style.overflowY = "hidden";
            } else {
                burgerIcon.src = BurgerMenu;
                body.style.overflowY = "scroll";
            }
        });

        navLinks.addEventListener("click", () => {
            burgerIcon.src = BurgerMenu;
            navLinks.classList.remove("open");
            burgerIcon.classList.remove("open");
            body.style.overflowY = "scroll";
        });
    }, []);

    /* Scroll */
    useEffect(() => {
        const header = document.querySelector("nav");
        header.classList.toggle("sticky", window.scrollY > 0);
    }, []);

    /* Scroll menu */
    function changeImage() {
        const burger = document.getElementById('burger');

        document.body.classList.toggle("lock-scroll");

        if (burger.src.match("burger")) {
            burger.src = BurgerMenu;
        } else {
            burger.src = CloseMenu;
        }
    }

    window.addEventListener("scroll", function () {
        var navbar = document.querySelector("nav");
        if (window.scrollY > 100) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    function leaveScrollBlockOnUl() {
        document.body.classList.remove("lock-scroll");
    }

    return (
        <div className="rectangle-nav">
            <nav className="navbar">
                <a href="/" className="logo">
                    <img className="Logo" src={Logo} alt="logo" />
                </a>

                <div className="nav_links ">

                    <a href="/">HOME</a>

                    <div className="dropdown">
                        <a href="/About">ABOUT</a>
                        <ul>
                            <li>
                                <a href="/About">Overview</a>
                            </li>
                            <li>
                                <a href="/Partner">Partners</a>
                            </li>
                            <li>
                                <a href="/Demos">Demos</a>
                            </li>
                        </ul>
                    </div>


                    <a href="/News">NEWS</a>
                    <div className="dropdown">
                        <a href="/">PUBLICATIONS</a>
                        <ul>
                            <li>
                                <a href="/Deliverables">Deliverables</a>
                            </li>
                            <li>
                                <a href="/Papers">Papers & Presentations</a>
                            </li>
                        </ul>
                    </div>


                    <a href="/Contact">CONTACT</a>
                </div>

                <form className="search-box" onSubmit={handleSearch}>
                    <input type="text" placeholder="Search..." name="search" />
                    <button type="submit"><img src={Loupe} alt="logo" /></button>
                </form>


                <div className="icon_click">
                    <img
                        id="burger"
                        src={BurgerMenu}
                        alt="menu"
                        className="menu_hamburger"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
