import http from 'k6/http'
import { loadJson, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const body = loadJson('../../data/createBoby.json')
let headers = {
  "header": "header"
}

export function yourCalledMethod() {

  const resp = http.get(`${baseUrl}`, body, { headers: headers })

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(UserWait())

  return ("Retorno")

}
