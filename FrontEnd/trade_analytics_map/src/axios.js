// axios
import axios from 'axios'

const domain = "http://api.tradeanalytics.vn/"

export default axios.create({
  baseURL: domain
  // You can add your headers here
})
