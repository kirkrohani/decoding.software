import React from 'react';
import PropTypes from 'prop-types';
import {
Header,
Segment,
Container,
Button
} from 'semantic-ui-react'

const BlogPost = (props) =>  {
  const {title, snippet} = props;
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
         {title}
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          {snippet}
        </p>
        <Button as='a' size='large'>
          Read More
        </Button>
      </Container>
    </Segment>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  snippet: PropTypes.string
}

export default BlogPost;
