import { ADD_PRODUCT } from './actionTypes'

export const addProduct = payload => {
  return {
    type: ADD_PRODUCT,
    payload
  }
}
