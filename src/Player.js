// src/Player.js
import React from 'react';
import './App.css';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    return (
        <div className="player-card">
            <img src={imageUrl} alt={name} className="player-image" />
            <div className="player-info">
                <h2>{name}</h2>
                <p>Team: {team}</p>
                <p>Nationality: {nationality}</p>
                <p>Jersey Number: {jerseyNumber}</p>
                <p>Age: {age}</p>
            </div>
        </div>
    );
};

Player.defaultProps = {
    name: "fattouma",
    team: ":D ?? ",
    nationality: "Tunisiene",
    jerseyNumber: "8",
    age: "36",
    imageUrl: "https://t4.ftcdn.net/jpg/05/13/79/77/360_F_513797754_KyKftzXhlul8FalDksafJf1TmtqrX1Px.jpg"
};

export default Player;