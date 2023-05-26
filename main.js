import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js"
import { getUserByEmail } from "./common/getUserByEmail.js"
import { createSuperUser } from "./common/postUser.js"
import { FlowCreateSearchUpdateDeleteUser, FlowAuthCreateDeleteProduct, FlowAuthCreateCancelCart } from "./Scenarios/Scenarios.js"

import { getAuthorization } from './common/getToken.js'

let token

export function setup() {

  if (getUserByEmail().quantidade == 0) {
    console.log("Usuário não encontrado")
    createSuperUser()
  }
  token = getAuthorization()
  return token
}

export default function (token) {
  FlowCreateSearchUpdateDeleteUser()
  FlowAuthCreateDeleteProduct(token)
  FlowAuthCreateCancelCart(token)
}

export function handleSummary(data) {
  return {
    "./report/report.html": htmlReport(data)
  }
}
