import http from 'k6/http'
import { sleep, check } from 'k6'
import { loadJson } from '../../common/jsonFunctions.js'

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const headers = loadJson('../../configs/headers.json')

export default function () {
  const resp = http.get(`${baseUrl}/usuarios`, { headers: headers })

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(1)
}
