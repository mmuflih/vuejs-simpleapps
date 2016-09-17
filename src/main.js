import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './routes';

Vue.use(VueRouter)

Vue.http.options.root = 'http://localhost:8081/api';

var router = new VueRouter()

router.map(Routes)

router.start(App, 'app')