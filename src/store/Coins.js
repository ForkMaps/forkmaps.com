import axios from 'axios';

const getDefaultState = () => {
    return {
        coins: {},
        loading: false,
        coinSort: {
            ascending: true,
            sortBy: 'name'
        }
    };
};

// initial state
const state = getDefaultState();

const getters = {
    algos: state => {

        // Reduce to unique array of algorithms.
        let algorithms = Object.values(state.coins).reduce((algos, coin) => {
            if (coin.algorithm && algos.indexOf(coin.algorithm) < 0) {
                algos.push(coin.algorithm);
            }
            return algos;
        }, []);
        algorithms.sort();
        return algorithms;
    },
    coins: state => state.coins,
    coinCount: state => {
        return Object.keys(state.coins).length;
    },
    coinList: state => {

        let coinList = Object.values(state.coins);
        let sortBy = state.coinSort.sortBy || 'name';
        coinList.sort((a, b) => {

            let sortLeft = (state.coinSort.ascending ? a[sortBy] : b[sortBy]).toUpperCase();
            let sortRight = (state.coinSort.ascending ? b[sortBy] : a[sortBy]).toUpperCase();
            if (sortLeft < sortRight) {
                return -1;
            }
            if (sortLeft > sortRight) {
                return 1;
            }
            return 0;
        });
        return coinList;
    },
    coinMap: state => {

        let coinNodes = {};
        let coinEdges = [];

        let coins = state.coins;

        function processCoin (key, coin) {

            function addNode (coinKey, coinVal, parentKey) {

                if (!coinNodes[parentKey]) {

                    let parent = coins[parentKey];
                    coinNodes[parentKey] = new coinNode(parentKey, parent);
                }
                coinNodes[key] = new coinNode(coinKey, coinVal);
                coinEdges.push({
                    from: parentKey,
                    to: coinKey,
                    color: {
                        color: "#BBBBBB"
                    },
                    arrows: {
                        to: {
                            enabled: true,
                            scaleFactor: 0.5
                        },
                        from: {
                            enabled: true,
                            scaleFactor: 0.1,
                            type: "circle"
                        }
                    },
                    arrowStrikethrough: false
                });
            };

            if (Array.isArray(coin.forkedFrom)) {

                coin.forkedFrom.forEach(parentKey => addNode(key, coin, parentKey));
            } else {

                addNode(key, coin, coin.forkedFrom);
            }
        };

        Object.entries(coins).forEach(([key, coin]) => {

            if (coin.forkedFrom) {

                processCoin(key, coin);
            }
        });

        // provide the data in the vis format
        let data = {
            nodes: new vis.DataSet(Object.values(coinNodes)),
            edges: new vis.DataSet(coinEdges)
        };
        let options = {
            interaction: {
                hideEdgesOnDrag: true
            },
            layout: {
                improvedLayout: false
            },
            physics: {
                enabled: true,
                stabilization: {
                    enabled: true,
                    iterations: 100,
                    updateInterval: 100,
                    onlyDynamicEdges: false,
                    fit: true
                }
            }
        };

        return { data: data, options: options };
    }
};

const coinNode = function (key, coin) {

    this.id = key;
    this.label = coin.coin;
    this.title = coin.name;
    this.shadow = {
        enabled: true,
        color: 'rgba(0,0,0,0.5)',
        x: 1,
        y: 1,
        size: 10
    };
    this.color = {
        background: "#FFFFFF",
        border: "#FFFFFF"
    };

    if (coin.icon) {
        this.shape = 'image';
        this.image = coin.icon;

        this.shapeProperties = {
            useBorderWithImage: false
        };
    } else {
        this.shape = 'circle';
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
    sort: ({ commit }, sortBy) => {
        commit('SORT', sortBy);
    }
};

const mutations = {
    LOADING_STATUS: (state, loading) => {
        state.loading = loading;
    },
    COINS_UPDATED: (state, coins) => {
        state.coins = coins;
    },
    SORT: (state, sortBy) => {

        // Reset sort order if new sort.
        if (state.coinSort.sortBy != sortBy) {

            state.coinSort.ascending = getDefaultState().coinSort.ascending;
            state.coinSort.sortBy = sortBy;
        } else {
            // Reverse search order.
            state.coinSort.ascending = !state.coinSort.ascending;
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
