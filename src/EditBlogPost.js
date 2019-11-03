import React from 'react';
import './css/App.css';
import CreateBlog from './CreateBlog';

class EditBlogPost extends React.Component {

  render () {
    return <CreateBlog key={`editPost-$this.props.id`} post={this.props.post} />      //same as CreateBlog except with a blog post passed down to pre-populate fields
  }
}

export default EditBlogPost;