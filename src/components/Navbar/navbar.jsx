import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Label } from 'semantic-ui-react'

const Navbar = props => {
  return (
    <Menu widths={2}>
      <Menu.Item as={Link} name="products" to="/">
        Products
      </Menu.Item>

      <Menu.Item as={Link} name="carts" to="/carts">
        Carts
        <Label>{props.carts.length}</Label>
      </Menu.Item>
    </Menu>
  )
}

const mapStateToProps = state => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(Navbar)
