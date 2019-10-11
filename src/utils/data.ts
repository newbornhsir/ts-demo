import {isPlainObject} from './util'

export function transformRequestData(val:any):any{
  if (isPlainObject(val)){
    return JSON.stringify(val)
  }
  return val
}
