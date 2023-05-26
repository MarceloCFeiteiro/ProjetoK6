import { uuidv4 } from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

export function loadJson(caminho) {

  let data = JSON.parse(open(caminho));
  return data

}

export function generateEmail() {
  var uuid = uuidv4().toString().substring(0, 4)
  var randonNumber = Math.floor(Math.random() * 100000)

  return `feiteiro${randonNumber}${uuid}@teste.com.br`

}

export function UserWait() {
  return Math.floor(Math.random() * (5 - 2 + 1) + 2)
}

export function generateProductName() {
  return "Produto Bala_" + uuidv4().toString().substring(0, 8)
}


