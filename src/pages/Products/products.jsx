import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Card, Image, Icon, Button } from 'semantic-ui-react'

import classes from './products.module.scss'
import productsJSON from '../../products.json'
import { addProduct } from '../../store/actions/actions'

class Products extends Component {
  state = {
    isFetching: false
  }

  componentDidMount() {
    this.fetchProducts()
  }

  fetchProducts = async () => {
    for (const product of productsJSON) {
      this.props.addProduct(product)
    }
  }

  render() {
    const { products } = this.props

    return (
      <div className={classes.productsPage}>
        <Container fluid>
          <Grid>
            <Grid.Row>
              {products.map(product => (
                <Grid.Column
                  width={4}
                  key={product.id}
                  className={classes.card}
                >
                  <Card centered>
                    <Image src={product.image} />
                    <Card.Content>
                      <Card.Header>{product.name}</Card.Header>
                      <Card.Meta>
                        <span className="date">Joined in 2015</span>
                      </Card.Meta>
                      <Card.Description>{product.description}</Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <p>
                        <Icon name="user" />
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

const mapStateToProps = state => {
  return {
    ...state
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: payload => dispatch(addProduct(payload))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products)
