const mutations = {
    LOADING_STATUS: (state, loading) => {
        state.loading = loading;
    },
    COINS_UPDATED: (state, coins) => {
        state.coins = coins;
    },
    SEARCH: (state, searchFor) => {
        state.coinSearch = searchFor;
    },
    SORT: (state, sortBy) => {

        // Reset sort order if new sort.
        if (state.coinSort.sortBy != sortBy) {

            state.coinSort.ascending = state.defaultState.coinSort.ascending;
            state.coinSort.sortBy = sortBy;
        } else {
            // Reverse search order.
            state.coinSort.ascending = !state.coinSort.ascending;
        }
    }
};

export default mutations;
