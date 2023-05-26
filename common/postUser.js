import http from 'k6/http'
import { loadJson } from './jsonFunctions.js'
import { sleep } from 'k6'

const baseUrl = loadJson('../configs/settings.json').baseUrl

export function createSuperUser() {
  const resp = http.post(`${baseUrl}/usuarios`, {
    "nome": "Marcelo Feiteiro Super User",
    "email": "marcelo.feiteiro@qa.com.br",
    "password": "superPassword",
    "administrador": "true"
  })
  sleep(1)

  console.log("Super usuário criado")

}
