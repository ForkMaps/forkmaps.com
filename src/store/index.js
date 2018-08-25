import Vue from 'vue';
import Vuex from 'vuex';
import Coins from './Coins';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        coins: Coins
    }
});
