import React from 'react';
import ViewBlogPost from './ViewBlogPost';
import EditBlogPost from './EditBlogPost';

import './css/App.css';

class BlogPost extends React.Component {

  constructor(props) {
    super(props);
    this.state = { isEditable: this.props.isEditable};
  }

  render () {
      if (!this.state.isEditable) {
        return( <ViewBlogPost key={this.props.post.id} post={this.props.post} /> );
      } else {
        return( <EditBlogPost key={this.props.post.id} post={this.props.post} />  );
      }
    

  }
}

export default BlogPost;