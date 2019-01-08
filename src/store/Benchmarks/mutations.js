const mutations = {
    LOADING_STATUS: (state, loading) => {
        state.loading = loading;
    },
    BENCHMARKS_UPDATED: (state, benchmarks) => {
        state.benchmarks = benchmarks;
    },
    SEARCH: (state, searchFor) => {
        state.benchSearch = searchFor;
    },
    SORT: (state, sortBy) => {

        // Reset sort order if new sort.
        if (state.benchSort.sortBy != sortBy) {

            state.benchSort.ascending = state.defaultState.benchSort.ascending;
            state.benchSort.sortBy = sortBy;
        } else {
            // Reverse search order.
            state.benchSort.ascending = !state.benchSort.ascending;
        }
    }
};

export default mutations;
