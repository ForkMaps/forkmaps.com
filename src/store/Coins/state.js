const getDefaultState = () => {

    // Default state props.
    let defaultState = {
        coins: {},
        loading: false,
        coinSearch: '',
        coinSort: {
            ascending: true,
            sortBy: 'name'
        }
    };

    // Copy default state to state.
    let state = Object.assign({}, defaultState);

    // Keep defaults for use later.
    state.defaultState = defaultState;

    return state;
};

// Assign initial state.
const state = getDefaultState();

export default state;
