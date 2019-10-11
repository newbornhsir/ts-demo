import { AxiosInstance } from './type'
import Axios from './core/axios'
import {extend} from './utils/util'
function createInstance(): AxiosInstance {
  const contex = new Axios()
  const instance = Axios.prototype.request.bind(contex)
  extend(instance, contex)
  return instance as AxiosInstance
}
const axios = createInstance()
axios({
  method: 'get',
  url: '/api/test',
  params: {a: 1, b: 2, c: [1,2,3]},
  data: {json: true}
}).then(res => {
  console.log(res);
})

axios({
  method: 'post',
  url: '/api/post',
  params: {a: 1, b: 2, c: [1,2,3]},
  data: {json: true}
})
axios.get('/api/test')