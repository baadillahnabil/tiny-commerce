import React, { Component } from 'react'
import { Container, Grid, Card, Image, Icon } from 'semantic-ui-react'
import classes from './products.module.scss'

class Products extends Component {
  render() {
    return (
      <div className={classes.productsPage}>
        <Container fluid>
          <Grid>
            <Grid.Row>
              {Array.from(Array(10), (el, index) => (
                <Grid.Column width={4} key={index} className={classes.card}>
                  <Card centered>
                    <Image src="https://react.semantic-ui.com/images/avatar/large/matthew.png" />
                    <Card.Content>
                      <Card.Header>Matthew</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>
                        Matthew is a musician living in Nashville.
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <p>
                        <Icon name="user" />
                        22 Friends
                      </p>
                    </Card.Content>
                  </Card>
                </Grid.Column>
              ))}
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Products
