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

    // Assign to a state object.
    let state = Object.assign({}, defaultState);

    // Add the defaults for use later.
    state.defaultState = defaultState;

    return state;
};

// Assign initial state.
const state = getDefaultState();

export default state;
