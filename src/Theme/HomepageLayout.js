import React from 'react';
import ResponsiveContainer from './ResponsiveContainer';
import BlogList from '../BlogList';
import FooterSegment from './FooterSegment';
import { Divider } from 'semantic-ui-react';
import {
  Segment,
  Grid,
  Header,
  Image,
  Button,
  Container,
  List
 } from 'semantic-ui-react'

class  HomepageLayout extends React.Component {

  render() {
    return (
      <ResponsiveContainer>

        <Segment style={{ padding: '8em 0em' }} vertical>    
            <Grid container stackable verticalAlign='middle'>     
              <Grid.Row>        
                <Grid.Column width={8}>                                    
    
                </Grid.Column>
      
                <Grid.Column floated='right' width={6}>             
                  <Image bordered rounded size='large' src='./images/white-image.png' />
                </Grid.Column>
              </Grid.Row>
      
              <Grid.Row>                                                         
                <Grid.Column textAlign='center'>
                  <Button size='huge'>Read More</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: '0em' }} vertical>
            <Grid celled='internally' columns='equal' stackable>
              <Grid.Row textAlign='center'>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    "What a Company"
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                </Grid.Column>
                <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                  <Header as='h3' style={{ fontSize: '2em' }}>
                    "I shouldn't have gone with their competitor."
                  </Header>
                  <p style={{ fontSize: '1.33em' }}>
                    <Image avatar src='/images/avatar/large/nan.jpg' />
                    <b>Nan</b> Chief Fun Officer Acme Toys
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Divider
                as='h4'
                className='header'
                horizontal
                style={{ margin: '3em 0em', textTransform: 'uppercase' }}
              >
          </Divider>

          <BlogList blogPosts={this.props.blogPosts} />
          <FooterSegment />

      </ResponsiveContainer>
      )
  }
}
  
export default HomepageLayout;