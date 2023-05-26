import http from 'k6/http'
import { loadJson, generateEmail, UserWait } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'

let body = loadJson("../../data/createUser.json")
const baseUrl = loadJson('../../configs/settings.json').baseUrl
let headers = {
  "monitor": "false"
}

export function postCreateUser() {
  body.email = generateEmail()

  const resp = http.post(`${baseUrl}/usuarios`, body, { headers: headers })
  check(resp, { 'Status code is 201': (r) => r.status == 201 })

  sleep(UserWait())

  console.log(resp.json("message"))

  return (resp.json("_id"))

}
