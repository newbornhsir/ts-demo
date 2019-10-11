export type Method = 'get' | 'post' | 'put' | 'delete'
export interface AxiosRequestConfig {
  url: string
  method ?: Method
  data ?: any
  params ?:any
  headers ?: any
  timeout ?:number
  responseType ?: XMLHttpRequestResponseType
}

export interface AxiosResponseConfig {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}

export interface AxiosPromise extends Promise<AxiosResponseConfig> {

}