import Vue from 'vue';
import Vuex from 'vuex';
import Coins from './modules/coins';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        coins: Coins
    }
});
