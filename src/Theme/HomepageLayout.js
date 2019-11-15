import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import BlogSegment from './BlogSegment';
import { Divider } from 'semantic-ui-react';


class  HomepageLayout extends React.Component {

  render() {
    return (
      <ResponsiveContainer>
        <BlogSegment title='We Help Companies and Companions' 
                                 snippet=" We can give your company superpowers to do things that they never thought possible.
                                Let us delight your customers and empower your needs... through pure data analytics."
                                imageUrl='./images/white-image.png' />

          <Divider
            as='h4'
            className='header'
            horizontal
            style={{ margin: '3em 0em', textTransform: 'uppercase' }}
          >
            <a href='#'>Previous Posts</a>
          </Divider>
      </ResponsiveContainer>
      )
  }
}
  
export default HomepageLayout;