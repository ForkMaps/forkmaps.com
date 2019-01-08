import { BenchmarkService } from '@/services/Benchmarks';

const getDefaultState = () => {

    // Default state props.
    let defaultState = {
        loading: false,
        benchSearch: '',
        benchSort: {
            ascending: true,
            sortBy: 'cpu'
        },
        benchmarks: []
    };

    // Copy default state to state.
    let state = Object.assign({}, defaultState);

    // Keep defaults for use later.
    state.defaultState = defaultState;
    state.benchmarkService = new BenchmarkService();

    return state;
};

// Assign initial state.
const state = getDefaultState();

export default state;
