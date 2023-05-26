import { loadJson, UserWait, generateProductName } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'
import { Httpx } from 'https://jslib.k6.io/httpx/0.1.0/index.js';

const body = loadJson("../../data/createProduct.json")
const baseUrl = loadJson('../../configs/settings.json').baseUrl

const request = new Httpx()

export function postCreateProduct(token) {
  body.nome = generateProductName()

  request.addHeaders({
    'Authorization': `${token}`,
    'monitor': 'false'
  })

  const resp = request.post(`${baseUrl}/produtos`, body)

  check(resp, { 'Status code is 201': (r) => r.status == 201 })

  sleep(UserWait())

  console.log(resp.json("message"))

  return (resp.json("_id"))
}
