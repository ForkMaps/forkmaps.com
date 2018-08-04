<template>
    <div class="map-page">
        <div id="networkMapContainer" style="width: 100%;">

        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'networkMap',
        data () {
            return {
                nestedCoins: null
            }
        },
        methods:{
            getCoins: function() {
                return axios('https://raw.githubusercontent.com/ForkMaps/cryptonote/master/dist/coins.json')
                .then((response) => {
                    let coins = response.data;
                    buildTree(coins);
                })
                .catch((err) => {
                    console.log(err);
                });
            }
        },
        mounted: function () {
            this.getCoins();

        }
    };

    const buildTree = function (coins) {

        let coinNodes = {};
        let coinEdges = [];

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

        // create a network
        let container = document.getElementById('networkMapContainer');

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
                hierarchical: {
                    enabled: false,
                    sortMethod: 'directed'
                }
            }
        };

        // initialize your network!
        let network = new vis.Network(container, data, options);
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
</script>

<style scoped>
    .map-page {
        display: flex;
        flex-grow: 1;
        width: 100%;
    }
    .tree-parent {
        display: flex;
        flex-direction: column;
    }
</style>
