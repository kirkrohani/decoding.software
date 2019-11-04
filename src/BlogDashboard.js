import React from 'react';
import './css/App.css';
import { posts } from './data/seed.js';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';

class BlogDashboard extends React.Component {

  constructor(props) {
    super(props);
    this.state  = { blogPosts: []};
  }

  componentDidMount() {
    this.setState( { blogPosts: posts} );
  }

  handleUpVote = postId => {
    let newPost = null;
    let updatedPostsList = this.state.blogPosts.map( (post) => {              //find selected blog post id
      if (post.id === postId) {
        newPost = Object.create(post);
        newPost.votes += 1;
        return newPost;
      } else {
        return post;
      } 
    });
    this.setState({ blogPosts: updatedPostsList});
  }

 render() {
   return (
    <div>
      { this.props.isAdmin && <CreateBlog /> }
      <BlogList blogPosts={this.state.blogPosts} onVoteClick={this.handleUpVote} />
    </div>
   );
 }
}

export default BlogDashboard;
