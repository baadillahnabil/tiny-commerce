import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import classes from './carts.module.scss'
import { addToCart, resetCart } from '../../store/actions/actions'

class Carts extends Component {
  componentDidMount() {
    console.log(this.props.carts)
  }

  render() {
    return (
      <div className={classes.productsPage}>
        <Container fluid>
          <p>Hello</p>
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
