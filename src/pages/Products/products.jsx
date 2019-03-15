import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Card, Image, Button } from 'semantic-ui-react'

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
                  <Card centered color="red">
                    <Image src={product.image} className={classes.cardImage} />
                    <Card.Content>
                      <Card.Header className={classes.cardTitle}>
                        {product.name}
                      </Card.Header>
                      <Card.Meta>
                        <p className={classes.price}>
                          {product.currency} {product.price}
                        </p>
                      </Card.Meta>
                      <Card.Description className={classes.description}>
                        {product.description}
                      </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                      <Button inverted fluid color="red">
                        Add To Cart
                      </Button>
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
