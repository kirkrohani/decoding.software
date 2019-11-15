import React from 'react';
import PropTypes from 'prop-types';
import {
Header
} from 'semantic-ui-react'

const BlogSegment = (props) =>  {
  const {title, snippet} = props;
  return (
    <div>
      <Header as='h3' style={{ fontSize: '2em' }}>
        {title}
      </Header>
      <p style={{ fontSize: '1.33em' }}>
        {snippet}
      </p>
    </div>
  )
}

BlogSegment.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default BlogSegment;
