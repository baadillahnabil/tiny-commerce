import {
  ADD_PRODUCT,
  RESET_PRODUCT,
  ADD_TO_CART,
  RESET_CART
} from '../actions/actionTypes'

const initialState = {
  products: [],
  carts: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: state.products.concat(action.payload)
      }
    case RESET_PRODUCT:
      return {
        ...state,
        products: []
      }
    case ADD_TO_CART:
      return {
        ...state,
        carts: state.carts.concat(action.payload)
      }
    case RESET_CART:
      return {
        ...state,
        carts: []
      }
    default:
      return state
  }
}

export default reducer
