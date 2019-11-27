import React from 'react';
import PropTypes from 'prop-types';
import {
Header,
Segment,
Container,
Button,
Image,
Grid
} from 'semantic-ui-react'

const BlogPost = (props) =>  {
  const {title, snippet} = props.post;
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>     
        <Grid.Row>        
            <Grid.Column width={8}>                                    
              <Header as='h3' style={{ fontSize: '2em' }}>
                {title}
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                {snippet}
              </p>
              <Button as='a' size='large'>
                Read More
              </Button>
            </Grid.Column>

            <Grid.Column floated='right' width={6}>             
              <Image bordered rounded size='large' src='./images/white-image.png' />
            </Grid.Column>
          </Grid.Row>
        </Grid>
    </Segment>
  )
}

BlogPost.propTypes = {
  title: PropTypes.string,
  snippet: PropTypes.string
}

export default BlogPost;
