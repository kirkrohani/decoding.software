import React from 'react';
import logo from './logo.svg';
import './css/App.css';
import { posts } from './data/seed.js';
import BlogPost from './BlogPost';

class Blog extends React.Component {

  constructor(props) {
    console.log('constructor call');
    super(props);
    this.state  = { blogPosts: posts};
  }


  render() {
    console.log('rendering....: ', this.state.blogPosts[1] );

    return (
      <div className="Blog">
        <header className="Blog-header">
          <img src={logo} className="Blog-logo" alt="logo" />
        </header>
        <BlogPost key={1} post={this.state.blogPosts[1]} />  

      </div>
    );
  }
}

export default Blog;
