import React from 'react';
import './css/App.css';
import BlogList from './BlogList';
import CreateBlogButton from './CreateBlogButton';

class BlogDashboard extends React.Component {

 render() {
   return (
    <div>
      <BlogList />
      <CreateBlogButton isVisible={true} />
    </div>
   );
 }



}

export default BlogDashboard;
