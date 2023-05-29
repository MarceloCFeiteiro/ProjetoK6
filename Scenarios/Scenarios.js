import { group } from 'k6';
import { postCreateUser } from '../api/user/postUser.js';
import { getCreatedUser } from '../api/user/getUserById.js';
import { delDeleteUser } from '../api/user/deleteUser.js';
import { putUpdateUser } from '../api/user/putUser.js'
import { postCreateProduct } from '../api/products/postProduct.js';
import { delDeleteProduct } from '../api/products/delProduct.js';
import { postCreateCart } from '../api/cart/postCart.js';
import { delDeleteCart } from '../api/cart/delCart.js';



export function FlowCreateSearchUpdateDeleteUser() {
  let id

  group('Create_User', function () {
    id = postCreateUser()
    getCreatedUser(id)
    putUpdateUser(id)
    delDeleteUser(id)
  })
}

export function FlowAuthCreateDeleteProduct(token) {
  let id
  group('Create_Product', function () {
    id = postCreateProduct(token)
    delDeleteProduct(token, id)
  })
}

export function FlowAuthCreateCancelCart(token) {
  group('Create Cart', function () {
    postCreateCart(token)
    delDeleteCart(token)
  })
}