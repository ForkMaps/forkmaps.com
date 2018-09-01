import Vue from 'vue';
import Router from 'vue-router';
import CoinList from '@/components/CoinList';
import Dashboard from '@/components/Dashboard';
import NetworkMap from '@/components/NetworkMap';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Dashboard
        },
        {
            path: '/coinList',
            name: 'coinList',
            component: CoinList
        },
        {
            path: '/forkMap',
            name: 'forkMap',
            component: NetworkMap
        }
    ]
});
