import http from 'k6/http'
import { loadJson } from './jsonFunctions.js'
import { sleep } from 'k6'

const baseUrl = loadJson('../configs/settings.json').baseUrl

export function deleteUser(_id) {

  console.log(_id + "-->")
  console.log(`${baseUrl}/usuarios/${_id}`)
  const resp = http.del(`${baseUrl}/usuarios/${_id}`)
  console.log(resp.body)

  sleep(1)
}