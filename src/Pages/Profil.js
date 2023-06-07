import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import '../CSS/topEachPage.css';
import '../CSS/profil.css';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import { auth } from '../firebase.config.js';
import { sendPasswordResetEmail } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


function Profil() {

    const email = auth.currentUser ? auth.currentUser.email : '';
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');

        if (!isLoggedIn) {
            navigate('/Connexion');
        }
    }, [navigate]);

    const handleForgotPassword = () => {
        const user = auth.currentUser;

        if (user) {
            const email = user.email;
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    alert('A password reset email has been sent to your email address. Don\'t forget to check your junk mail or spam.');
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };



    const [username, setUsername] = useState(Cookies.get('username') || 'admin');

    // Fonction de gestion du changement de nom d'utilisateur
    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername);
        Cookies.set('username', newUsername, { expires: 7 }); // Stockage du nom d'utilisateur dans les cookies pendant 7 jours
    };

    return (
                <>
                    <div className="rectangle-nav">
                        <Navbar/>
                    </div>

                    <div className="nav-bar-rectangle">
                        <span>Hi, {username}</span>
                    </div>

                    <div className="profil-allcontainer">

                        <div className="profil-container">
                            <div className="profil-section">
                                <h1>Account information :</h1>
                                <div className="profil-info">

                                    <div className="profil-mail">
                                        <h4>E-mail :</h4>
                                        <p>{email}</p>
                                    </div>

                                    <div className="profil-username">
                                        <h4>Actual username :</h4>
                                        <p>{username}</p>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="profil-container">
                            <div className="update-section">
                                <h1>Update profil :</h1>
                                <div className="form-input">
                                    <h4>Admin name :</h4>
                                    <input type="text" id="username" value={username} onChange={handleUsernameChange} />
                                </div>
                                <div className="form-pwd">
                                    <p className="forgot-password" onClick={handleForgotPassword}>Forgot password ?</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Footer/>
                </>
    );
}
export default Profil;
