import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container, Message, Table, Header, Button } from 'semantic-ui-react'
import GoogleLogin from 'react-google-login'

import classes from './carts.module.scss'
import { addToCart, resetCart } from '../../store/actions/actions'

class Carts extends Component {
  state = {
    isLoggedOn: false
  }

  onLoginGoogleSuccess = () => {
    console.log('succeed')
    this.setState({ isLoggedOn: true })
  }
  onLoginGoogleFailed = () => {
    console.log('failed')
    this.setState({ isLoggedOn: false })
  }

  onPlaceOrder = () => {
    alert('yeay')
  }

  render() {
    const { isLoggedOn } = this.state
    const { carts, resetCart } = this.props

    let totalPrice = 0
    if (carts.length !== 0) {
      for (const product of carts) {
        totalPrice += Number(product.price)
      }
      totalPrice = `${carts[0].currency} ${totalPrice.toFixed(2)}`
    }

    return (
      <div className={classes.cartsPage}>
        <Container>
          {carts.length === 0 ? (
            <Message>
              <Message.Header className={classes.emptyMessage}>
                Cart is empty :)
              </Message.Header>
            </Message>
          ) : (
            <>
              <Table celled>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell className={classes.columnIndex}>
                      #
                    </Table.HeaderCell>
                    <Table.HeaderCell>Product Name</Table.HeaderCell>
                    <Table.HeaderCell className={classes.columnPriceHeader}>
                      Price
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  {carts.map((product, index) => (
                    <Table.Row key={index}>
                      <Table.Cell>{index + 1}</Table.Cell>
                      <Table.Cell>{product.name}</Table.Cell>
                      <Table.Cell className={classes.columnPrice}>
                        {product.currency} {product.price}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>

                <Table.Footer fullWidth>
                  <Table.Row>
                    <Table.HeaderCell colSpan="2">
                      <Header floated="right">Total : </Header>
                    </Table.HeaderCell>
                    <Table.HeaderCell>
                      <Header floated="right">{totalPrice}</Header>
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Footer>
              </Table>
              <br />
              <Button
                floated="right"
                color="red"
                inverted
                disabled={!isLoggedOn}
                onClick={this.onPlaceOrder}
              >
                Place Order
              </Button>
              <Button floated="right" color="blue" inverted onClick={resetCart}>
                Clear Cart
              </Button>
              {!isLoggedOn && (
                <GoogleLogin
                  buttonText="Log-In With Google"
                  clientId="569427941113-97186ocu7sj0f3k6vk8oal4qc1133fs7.apps.googleusercontent.com"
                  onSuccess={this.onLoginGoogleSuccess}
                  onFailure={this.onLoginGoogleFailed}
                  cookiePolicy={'single_host_origin'}
                  redirectUri="http://localhost:3000"
                />
              )}
            </>
          )}
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
    addToCart: payload => dispatch(addToCart(payload)),
    resetCart: () => dispatch(resetCart())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Carts)
