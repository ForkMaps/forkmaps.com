import Vue from 'vue'
import Router from 'vue-router'
import CoinList from '@/components/CoinList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CoinList',
            component: CoinList
        }
    ]
});
