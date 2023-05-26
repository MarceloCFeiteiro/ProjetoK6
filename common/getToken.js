import { loadJson } from './jsonFunctions.js'
import { sleep, check } from 'k6'
import { Httpx } from 'https://jslib.k6.io/httpx/0.1.0/index.js';

const body = loadJson("../data/userDefault.json")
const baseUrl = loadJson('../configs/settings.json').baseUrl

const request = new Httpx({ baseURL: `${baseUrl}` })

export function getAuthorization() {

  const resp = request.post(`/login`, body)

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(1)

  console.log(resp.json("message"))

  return (resp.json("authorization"))
}

