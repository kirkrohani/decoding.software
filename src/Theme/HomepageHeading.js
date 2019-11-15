import React from 'react';
import PropTypes from 'prop-types';
import {
 Container,
 Header,
} from 'semantic-ui-react'

/* eslint-disable react/no-multi-comp */
/* @TODO Remove HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='decoding.software'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '1.5em',
      }}
    />
    <Header
      as='h2'
      content="Random musings about tech and other stuff that's on my mind"
      inverted
      style={{
        fontStyle: 'italic',
        fontSize: mobile ? '1.2em' : '1.2em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
  </Container>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading;