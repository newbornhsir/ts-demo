import {AxiosRequestConfig, AxiosPromise} from '../type'
import {buildUrl} from '../utils/urls'
import {transformRequestData as transformData} from '../utils/data'
import {buildHeader} from '../utils/header'
import xhr from '../xhr'
 export default function axios(config:AxiosRequestConfig):AxiosPromise{
  //TODO:
  processConfig(config)
  return xhr(config)
}

function processConfig (config: AxiosRequestConfig):void {
  config.url = transformUrl(config)
  config.data = transformRequestData(config)
  config.headers = transformHeader(config)
}

function transformUrl(config:AxiosRequestConfig):string{
  let {url, params} = config
  return buildUrl(url!, params)
}

function transformRequestData(config: AxiosRequestConfig):any {
  return transformData(config.data)
}

function transformHeader(config: AxiosRequestConfig): object {
  return buildHeader(config.headers)
}
