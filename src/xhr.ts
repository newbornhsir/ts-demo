import {AxiosRequestConfig, AxiosPromise, AxiosResponseConfig} from './type'
import {parseHeader} from './utils/header'

export default function xhr(config:AxiosRequestConfig): AxiosPromise {
  const {data = null, url, method="get", headers, timeout, responseType} = config
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.open(method.toUpperCase(), url, true)
    /**FIXME: */
    Object.keys(headers as object).forEach(name => {
      request.setRequestHeader(name, headers[name])
    })
    request.onerror = function(){
      reject(new Error('network error'))
    }
    request.ontimeout = function () {
      reject(new Error('timeout'))
    }
    request.onreadystatechange = function () {
      if (request.readyState === 0) return
      if (request.readyState !==4)return
      const responseHeader = parseHeader(request.getAllResponseHeaders())
      const requestData = responseType !==  'text' ? request.response : request.responseText
      const response:AxiosResponseConfig = {
        data: requestData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeader,
        config,
        request
      }
      resolve(response)
    }
    if (timeout) {
      request.timeout = timeout
    }
    if (responseType) {
      request.responseType = responseType
    }
    request.send(data)
  })
}