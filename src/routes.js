/*
* @Author: Muhammad Muflikh Kholidin
* @Date:   2016-09-15 07:56:42
* @Last Modified by:   Muflih Kholidin
* @Last Modified time: 2016-09-17 17:27:38
*/

import ProductList from './components/page/product/ProductList'
import Dashboard from './components/Dashboard'

export default {
    'dashboard': {
        component: Dashboard
    },
    '/': {
        component: ProductList,
    }
}