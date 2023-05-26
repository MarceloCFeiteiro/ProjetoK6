import { loadJson, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'
import { Httpx } from 'https://jslib.k6.io/httpx/0.1.0/index.js';

const body = JSON.stringify(loadJson("../../data/createCart.json"))
const baseUrl = loadJson('../../configs/settings.json').baseUrl

const request = new Httpx()

export function postCreateCart(token) {

  request.addHeaders({
    'Authorization': `${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'monitor': 'false'
  })

  const resp = request.post(`${baseUrl}/carrinhos`, body)

  check(resp, { 'Status code is 201': (r) => r.status == 201 })

  sleep(UserWait())

  console.log(resp.json("message"))
}
