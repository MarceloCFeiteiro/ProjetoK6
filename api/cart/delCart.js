import { loadJson, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'
import { Httpx } from 'https://jslib.k6.io/httpx/0.1.0/index.js';

const baseUrl = loadJson('../../configs/settings.json').baseUrl

const request = new Httpx()

export function delDeleteCart(token) {

  request.addHeaders({
    'Authorization': `${token}`,
    'monitor': 'false'
  })

  const resp = request.delete(`${baseUrl}/carrinhos/cancelar-compra`)

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(UserWait())

  console.log(resp.json("message"))
}
