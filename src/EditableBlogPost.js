import React from 'react';
import BlogPost from './BlogPost';
import BlogForm from './BlogForm';
import './css/App.css';

class EditableBlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isEditable: false};
  }

  render () {
      if (!this.state.isEditable) {
        return( <BlogPost key={this.props.post.id} post={this.props.post} onVoteClick={this.props.onVoteClick}/> );
      } else {
        return( <BlogForm key={this.props.post.id} post={this.props.post} />  );
      }
    

  }
}

export default EditableBlogPost;