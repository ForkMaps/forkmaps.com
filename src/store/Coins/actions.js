import { CoinService } from '@/services/CoinService';

const actions = {
    loadCoins: (context) => {
        context.commit('LOADING_STATUS', true);
        CoinService.loadCoins()
        .then((coins) => {
            context.commit('COINS_UPDATED', coins);
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
