import React from 'react';
import logo from './logo.svg';
import './App.css';

function Blog() {
  return (
    <div className="Blog">
      <header className="Blog-header">
        <img src={logo} className="Blog-logo" alt="logo" />
        <a
          className="Blog-link"
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

export default Blog;
