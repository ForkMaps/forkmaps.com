import Vue from 'vue';
import Vuex from 'vuex';
import Benchmarks from './Benchmarks';
import Coins from './Coins';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        benchmarks: Benchmarks,
        coins: Coins
    }
});
