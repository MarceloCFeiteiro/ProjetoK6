import http from 'k6/http'
import { loadJson, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const body = loadJson('../../data/createBoby.json')
let headers = {
  "header": "header"
}

export function yourCalledMethod() {

  const resp = http.post(`${baseUrl}`, body, { headers: headers })

  check(resp, { 'Status code is 201': (r) => r.status == 201 })

  sleep(UserWait())

  return ("Retorno")

}
