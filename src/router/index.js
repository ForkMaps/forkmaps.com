import Vue from 'vue';
import Router from 'vue-router';
import Benchmarks from '@/components/Benchmarks';
import CoinList from '@/components/CoinList';
import Dashboard from '@/components/Dashboard';
import NetworkMap from '@/components/NetworkMap';

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/benchmarks',
            name: 'benchmarks',
            component: Benchmarks
        },
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
