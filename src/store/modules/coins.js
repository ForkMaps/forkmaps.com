import axios from 'axios';

const state = {
    coins: {},
    loading: false
};

const getters = {
    coins: state => state.coins,
    coinList: state => {
        let coinList = Object.values(state.coins);

        let sortBy = 'name';
        coinList.sort((a, b) => {

            let aSort = a[sortBy].toUpperCase();
            let bSort = b[sortBy].toUpperCase();
            if (aSort < bSort) {
                return -1;
            }
            if (aSort > bSort) {
                return 1;
            }
            return 0;
        });
        return coinList;
    },
    coinMap: state => {

    }
};

const actions = {
    loadCoins: (context) => {
        context.commit('LOADING_STATUS', true);
        axios('https://raw.githubusercontent.com/ForkMaps/cryptonote/master/dist/coins.json')
        .then((response) => {
            context.commit('COINS_UPDATED', response.data);
            context.commit('LOADING_STATUS', false);
        })
        .catch((err) => {
            console.error(err);
        });
    },
};

const mutations = {
    LOADING_STATUS: (state, loading) => {
        state.loading = loading;
    },
    COINS_UPDATED: (state, coins) => {
        state.coins = coins;
    }
};

export default {
  state,
  getters,
  actions,
  mutations,
};
