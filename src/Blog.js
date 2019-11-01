import React from 'react';
// import logo from './logo.svg';
import './css/App.css';
import { posts } from './data/seed.js';
import BlogPost from './BlogPost';

class Blog extends React.Component {

  constructor(props) {
    console.log('constructor call');
    super(props);
    this.state  = { blogPosts: posts};
  }

  handlePostUpVote = postId => {
    // console.log('handlePostUpVote post id: ', postId, 'current votes: ', this.state.posts[postId].votes);

    let newPost = null;
    let updatedPostsList = this.state.posts.map( (post) => {              //find selected blog post id
      if (post.id === postId) {
        newPost = Object.create(post);
        newPost.votes += 1;
        return newPost;
      } else {
        return post;
      } 
    });
    this.setState({ posts: updatedPostsList});
  }

  render() {
    const postComponents =  this.state.blogPosts.sort( (a,b) => (a.votes-b.votes)).map( (post) =>       //sort in order of ascending # of votes
      <BlogPost key={post.id} post={post} onVote={this.handlePostUpVote} />  
    );

    return (
      <div className='ui unstackable items'>
        {postComponents}    
      </div>
    );
  } //end render

}

export default Blog;
