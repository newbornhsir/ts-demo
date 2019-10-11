import { AxiosRequestConfig, AxiosPromise } from '../type/index'
import dispatchRequest from './dispatchRequest'
export default class Axios {
  request(config: AxiosRequestConfig):AxiosPromise{
    return dispatchRequest(config)
  }
  get(url:string, config?:AxiosRequestConfig):AxiosPromise{
    config = config || {}
    Object.assign(config,{url, method: 'get'})
    return dispatchRequest(config)
  }
  post(url:string, config?:AxiosRequestConfig):AxiosPromise {
    config = config || {}
    Object.assign(config,{url, method: 'post'})
    return dispatchRequest(config)
  }
}