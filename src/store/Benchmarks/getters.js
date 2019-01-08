const getters = {
    benchmarks: state => state.benchmarks,
    benchList: state => {

        // Filter and map the coins.
        let benchList = state.benchmarks.slice().reduce((filtered, benchmark) => {

            if (!isSearchMatch(state.benchSearch, benchmark)) {

                return filtered;
            }

            filtered.push(benchmark);
            return filtered;
        }, []);

        // Sort the coin list.
        let sortBy = state.benchSort.sortBy || 'make';
        benchList.sort((a, b) => {

            let sortRight = '';
            let sortLeft = '';
            if (sortBy == 'cpu') {

                sortLeft = a.make.toUpperCase() + a.model.toUpperCase();
                sortRight = b.make.toUpperCase() + b.model.toUpperCase();
            } else {

                sortLeft = (state.benchSort.ascending ? a[sortBy] : b[sortBy]).toString().toUpperCase();
                sortRight = (state.benchSort.ascending ? b[sortBy] : a[sortBy]).toString().toUpperCase();
            }

            if (sortLeft < sortRight) {
                return -1;
            }
            if (sortLeft > sortRight) {
                return 1;
            }
            return 0;
        });
        return benchList;
    }
};

const isSearchMatch = function (searchFor, benchmark) {

    if (!searchFor || searchFor.length === 0) {

        return true;
    }

    let benchSearch = searchFor.toUpperCase();
    let searchProps = [
        benchmark.make,
        benchmark.model
    ];

    return searchProps.join('').toUpperCase().includes(benchSearch);
};

export default getters;
