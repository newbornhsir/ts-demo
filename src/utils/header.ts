export function buildHeader(headers: object | undefined | null):object {
  headers = headers || {}
  return Object.assign({
    'Content-Type': 'application/json;charset=UTF-8'
  }, headers)
}

export function parseHeader(headers: string):any {
  let headerArray = headers.split('\r\n'), headerObj:any = {}
  headerArray.filter(item=>{
    if (item) {
      return item
    }
  }).forEach(item => {
    let [k, v] = item.split(":")
    headerObj[k.trim().toLocaleLowerCase()] = v.trim().toLocaleLowerCase()
  })
  return headerObj
}