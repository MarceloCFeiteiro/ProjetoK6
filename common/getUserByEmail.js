import http from 'k6/http'
import { sleep, check } from 'k6'
import { loadJson } from './jsonFunctions.js'

const baseUrl = loadJson('../configs/settings.json').baseUrl
const usuario = loadJson("../data/userDefault.json")

export function getUserByEmail() {
  const resp = http.get(`${baseUrl}/usuarios?email=${usuario.email}`)
  check(resp, { 'Status code is 200': (r) => r.status == 200 })
  sleep(1)
  return JSON.parse(resp.body)
}
