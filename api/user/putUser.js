import http from 'k6/http'
import { loadJson, UserWait, generateEmail } from '../../common/jsonFunctions.js'
import { sleep, check } from 'k6'

const baseUrl = loadJson('../../configs/settings.json').baseUrl
const headers = loadJson('../../configs/headers.json')

export function putUpdateUser(_id) {

  const body = {
    "nome": "Marcelo Feiteiro Alterado",
    "email": generateEmail(),
    "password": "teste",
    "administrador": "false"
  }
  const resp = http.put(`${baseUrl}/usuarios/${_id}`, body, { headers: headers })

  check(resp, { 'Status code is 200': (r) => r.status == 200 })

  sleep(UserWait())

  console.log(`Usuário de id: ${_id} alterado.`)
}
