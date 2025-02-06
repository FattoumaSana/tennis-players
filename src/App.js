// src/App.js
import React from 'react';
import PlayersList from './PlayersList';
import Header from './Header';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> 
      <PlayersList />
    </div>
  );
}

export default App;