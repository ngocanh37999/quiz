import axios, { AxiosInstance } from 'axios'
import config from 'src/constants/config'

class Http {
  public instance: AxiosInstance
  constructor() {
    this.instance = axios.create({
      baseURL: config.baseUrl
    })
  }
}
const http = new Http().instance
export default http
