import axios from 'axios';

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
    search: ({ commit }, searchFor) => {
        commit('SEARCH', searchFor);
    },
    sort: ({ commit }, sortBy) => {
        commit('SORT', sortBy);
    }
};

export default actions;
