import React from 'react';
import './css/App.css';
import BlogForm from './BlogForm';
import { Button } from 'semantic-ui-react'


class CreateBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  handleFormOpen = () => {
    this.setState({ isOpen: true });
  };

  handleFormClose = () => {
    this.setState({ isOpen: false });
  };

  handleFormSubmit = (post) => {
    this.props.onFormSubmit(post);
    this.setState({ isOpen: false });
  };

  render() {
    if (this.state.isOpen) {
      return (
        <BlogForm
          onFormSubmit={this.handleFormSubmit}
          onFormClose={this.handleFormClose}
        />
      );
    } else {
      return (
        <div className='ui basic content center aligned segment'>
          <Button onClick={this.handleFormOpen}>Create Blog Post</Button>
        </div>
      );
    }
  }
}

export default CreateBlog;