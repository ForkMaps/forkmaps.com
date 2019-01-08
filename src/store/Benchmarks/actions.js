
const actions = {
    getBenchmarks: ({ commit, state }, algo) => {

        return state.benchmarkService.getBenchmarks(algo).then((benchmarks) => {

            commit('BENCHMARKS_UPDATED', benchmarks);
        });
    },
    sort: ({ commit }, sortBy) => {
        commit('SORT', sortBy);
    }
};

export default actions;
