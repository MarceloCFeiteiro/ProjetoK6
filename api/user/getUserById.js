import http from 'k6/http'
import { loadJson, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const headers = loadJson('../../configs/headers.json')

export function getCreatedUser(_id) {
  const resp = http.get(`${baseUrl}/usuarios/${_id}`, { headers: headers })

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(UserWait())

  console.log(`Usuário de id: ${_id} encontrado.`)

  return (resp.json("_id"))

}