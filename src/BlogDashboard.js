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

  handleCreateFormSubmit = (post) => {
    this.createPost(post);
  };

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

  createPost = (post) => {
    // const newPost = helpers.newPost(post);
    // this.setState({
    //   blogPosts: this.state.blogPosts.concat(newPost),
    // });

    // client.createPost(newPost);
  };

 render() {
   return (
    <div>
      { this.props.isAdmin && <CreateBlog onFormSubmit={this.handleCreateFormSubmit} /> }
      <BlogList blogPosts={this.state.blogPosts} onVoteClick={this.handleUpVote} />
    </div>
   );
 }
}

export default BlogDashboard;
