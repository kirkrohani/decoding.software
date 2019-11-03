import React from 'react';
import './css/App.css';
import BlogList from './BlogList';
import CreateBlog from './CreateBlog';

class BlogDashboard extends React.Component {

 render() {
   return (
    <div>
      { this.props.isAdmin && <CreateBlog /> }
      <BlogList />
    </div>
   );
 }



}

export default BlogDashboard;
