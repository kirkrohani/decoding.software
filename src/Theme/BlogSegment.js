import React from 'react';
import PropTypes from 'prop-types';
import {
 Segment,
 Grid,
 Header,
 Image,
 Button
} from 'semantic-ui-react'

const BlogSegment = (props) =>  {
  const {title, description, imageUrl} = props;
  return (
    <Segment style={{ padding: '8em 0em' }} vertical>
            
      <Grid container stackable verticalAlign='middle'>     
        <Grid.Row>        

          <Grid.Column width={8}>                                    
            <Header as='h3' style={{ fontSize: '2em' }}>
              {title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {description}
            </p>
          </Grid.Column>

          <Grid.Column floated='right' width={6}>             
            <Image bordered rounded size='large' src={imageUrl} />
          </Grid.Column>

        </Grid.Row>

        <Grid.Row>                                                         
          <Grid.Column textAlign='center'>
            <Button size='huge'>Read More</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    
    </Segment>
  )
}

BlogSegment.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageUrl: PropTypes.string,
}

export default BlogSegment;
