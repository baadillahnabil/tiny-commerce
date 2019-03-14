import axios from 'axios'
import { BASE_URL, API_TOKEN } from './env'

const API = axios.create({
  baseURL: BASE_URL,
  data: {
    token: API_TOKEN
  }
})

export default API
