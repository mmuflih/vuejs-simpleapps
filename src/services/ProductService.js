/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-15 08:07:08
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-17 11:09:56
*/

import VueResource from 'vue-resource'
import Vue from 'vue'

Vue.use(VueResource);

export function getProducts(perPage, page) {
    return Vue.http.get('products/' + perPage + '/page/' + page)
}

export function getProduct(id) {
    return Vue.http.get('products/' + id)
}

export function saveProduct(product) {
    return Vue.http.post('products/', product)
}

export function deleteProduct(product) {
    return Vue.http.delete('products/' + product.id)
}

export function updateProduct(id, product) {
    return Vue.http.put('products/' + id, product)
}