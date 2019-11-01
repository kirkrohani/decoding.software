import React from 'react';
import logo from './logo.svg';
import './css/App.css';

class Blog extends React.Component {

  render() {
    return (
      <div className="Blog">
        <header className="Blog-header">
          <img src={logo} className="Blog-logo" alt="logo" />
          <a className="Blog-link" href="https://decoding.software" target="_blank" rel="noopener noreferrer">
            decoding.software v1.2!
          </a>
        </header>
      </div>
    );
  }
}

export default Blog;
