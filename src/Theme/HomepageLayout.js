import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import BlogSegment from './BlogSegment';


class  HomepageLayout extends React.Component {

  render() {
    return (
      <ResponsiveContainer>
        <BlogSegment title='We Help Companies and Companions' 
                                 description=" We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics."
                                imageUrl='./images/white-image.png' />
      </ResponsiveContainer>
      )
  }
}
  
export default HomepageLayout;