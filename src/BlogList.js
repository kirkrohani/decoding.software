import React from 'react';
import './css/App.css';
import EditableBlogPost from './EditableBlogPost';


class BlogList extends React.Component {
  render() {
    const postComponents =  this.props.blogPosts.sort( (a,b) => (a.votes-b.votes)).map( (post) => 
      <EditableBlogPost key={post.id} post={post} onVoteClick={this.props.onVoteClick} />      
    );

    return (
      <div>
        {postComponents}    
      </div>
    );
  } //end render
}

export default BlogList;