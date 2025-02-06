// src/Header.js
import React from 'react';
import './App.css'; // Import du fichier CSS

const Header = () => {
    return (
        <header className="header">
            <h1 className="title">
                Tunisian Players
                <img
                    src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIJY9SR9WpmY7GNyH0ZKsAp4wskPST_dlzGO_leNTOzfFQEzhfxk9iQ6yBy1mV8MpKN-28kJHpAQ4il32RLN1jj3pSMFUxb4jdUBahfns-eRn4QKuypYGp4L9pGy2tPzc_AmazbGL9bIg/s0/Flag_of_Tunisia.gif"
                    alt="Tunisian Flag"
                    className="flag"
                />
            </h1>
        </header>
    );
};

export default Header;