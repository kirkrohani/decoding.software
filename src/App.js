import React from 'react';
import logo from './logo.svg';
import './App.css';

function Blog() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://decoding.software"
          target="_blank"
          rel="noopener noreferrer"
        >
          decoding.software bitches!
        </a>
      </header>
    </div>
  );
}

export default App;
