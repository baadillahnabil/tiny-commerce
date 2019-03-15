import {
  ADD_PRODUCT,
  RESET_PRODUCT,
  ADD_TO_CART,
  RESET_CART
} from './actionTypes'

// Products
export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
export const resetProduct = () => {
  return {
    type: RESET_PRODUCT
  }
}

// Carts
export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload
  }
}
export const resetCart = () => {
  return {
    type: RESET_CART
  }
}
