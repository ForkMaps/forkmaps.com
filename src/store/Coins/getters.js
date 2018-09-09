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
    coinForks: (state) => (coinKey) => {

        return Object.values(state.coins).filter((coin) => {

            return coin.forkedFrom && coin.forkedFrom === coinKey;
        });
    },
    coinList: state => {

        // Filter and map the coins.
        let coinList = Object.keys(state.coins).reduce((filtered, key) => {

            let coin = state.coins[key];
            coin.key = key;
            if (!isSearchMatch(state.coinSearch, coin)) {
                
                return filtered;
            }

            filtered.push(coin);
            return filtered;
        }, []);

        // Sort the coin list.
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

        let coins = state.coins;

        let mapData = Object.keys(coins).reduce((data, coinKey) => {

            let coin = coins[coinKey];

            // Add map edges.
            let forkedFrom = coin.forkedFrom ? (Array.isArray(coin.forkedFrom) ? coin.forkedFrom : [coin.forkedFrom]) : [];
            Array.prototype.push.apply(data.edges, forkedFrom.map((forkParent) => {

                // Increment fork count for parent.
                data.forkCounts[forkParent] = data.forkCounts[forkParent] ? data.forkCounts[forkParent] + 1 : 1;

                // Return edge relationship.
                return {
                    source: forkParent,
                    target: coinKey
                };
            }));

            data.nodes[coinKey] = {
                id: coinKey,
                name: coin.name,
                label: coin.coin,
                title: coin.name,
                symbol: coin.icon ? 'image://' + coin.icon : 'circle',
                symbolSize: 10,
                value: 0
            };
            return data;
        }, { nodes: {}, edges: [], forkCounts: {} });

        // Add fork counts to nodes.
        Object.keys(mapData.nodes).forEach((nodeKey) => {

            if (mapData.forkCounts[nodeKey]) {

                mapData.nodes[nodeKey].symbolSize = mapData.forkCounts[nodeKey] / 2 + 20;
                mapData.nodes[nodeKey].value = mapData.forkCounts[nodeKey];
            } else if (!coins[nodeKey].forkedFrom) {

                delete mapData.nodes[nodeKey];
            }
        });
        delete mapData.forkCounts;

        //return { data: data, options: options };
        return { data: mapData };
    },
    algorithmCounts: state => {

        let counts = Object.values(state.coins).reduce((algoCounts, coin) => {

            if (!coin.algorithm) {

                return algoCounts;
            }

            if (algoCounts[coin.algorithm]) {

                algoCounts[coin.algorithm].count++;
            } else {

                algoCounts[coin.algorithm] = {
                    algorithm: coin.algorithm,
                    count: 1
                };
            }
            return algoCounts;
        }, {});

        return Object.values(counts);
    },
    forkCounts: state => {

        let coinsWithForks = Object.keys(state.coins).reduce((forked, key) => {

            let coin = state.coins[key];
            if (!coin.forkedFrom) {

                return forked;
            }

            let forkedFrom = Array.isArray(coin.forkedFrom) ? coin.forkedFrom : [coin.forkedFrom];
            forkedFrom.forEach(forkedKey => {

                if (forked[forkedKey]) {

                    forked[forkedKey].count++;
                } else {

                    let forkSource = state.coins[forkedKey];
                    forked[forkedKey] = {
                        coin: forkSource.coin,
                        name: forkSource.name,
                        count: 1,
                        icon: forkSource.icon
                    };
                }
            });

            return forked;
        }, {});

        let result = Object.values(coinsWithForks);
        result.sort((a, b) => { return b.count - a.count; });
        return Object.values(result);
    }
};

const isSearchMatch = function (searchFor, coin) {

    if (!searchFor || searchFor.length === 0) {

        return true;
    }

    let coinSearch = searchFor.toUpperCase();
    let searchProps = [
        coin.coin,
        coin.name,
        coin.algorithm
    ];

    if (coin.forkedFrom) {

        if (Array.isArray(coin.forkedFrom)) {
            searchProps.push(coin.forkedFrom.join(''));
        } else {
            searchProps.push(coin.forkedFrom);
        }
    }

    return searchProps.join('').toUpperCase().includes(coinSearch);
};

export default getters;
