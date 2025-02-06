// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import Header from './Header';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <PlayersList />
      <Footer />
    </div>
  );
}

export default App;