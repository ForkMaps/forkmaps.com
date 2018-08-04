<template>
    <div class="coin-tree">
        <div class="tree-parent">
            <tree-node v-for="(coin, key, index) in  nestedCoins" :is-last="true" :coin="coin" :key="key">
            </tree-node>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import TreeNode from './components/treeNode';

    export default {
        name: 'coinTree',
        components: {
            'tree-node': TreeNode
        },
        data () {
            return {
                nestedCoins: null
            }
        },
        methods:{
            getCoins: function() {
                return axios('https://raw.githubusercontent.com/jerme404/forkmaps-json-cryptonote/master/dist/coins.json')
                .then((response) => {
                    let coins = response.data;
                    this.nestedCoins = buildTree(coins);
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

        let nestedCoins = Object.assign({}, coins);
        let coinList = Object.keys(nestedCoins);
        Object.entries(nestedCoins).forEach(([coinKey, coinValue]) => {

            if (!coinValue.forkedFrom) {

                return;
            }

            let forkedFrom = coinValue.forkedFrom;

            if (forkedFrom && Array.isArray(forkedFrom)) {

                forkedFrom.forEach((coin) => {
                    if (nestedCoins[coin]) {

                        if (!nestedCoins[coin].forks) {
                            nestedCoins[coin].forks = [];
                        }
                        nestedCoins[coin].forks.push(coinValue);
                    }
                });
            } else {

                if (nestedCoins[forkedFrom]) {

                    if (!nestedCoins[forkedFrom].forks) {
                        nestedCoins[forkedFrom].forks = [];
                    }
                    nestedCoins[forkedFrom].forks.push(coinValue);
                }
            }
        });
        let result = {};
        for (let key in nestedCoins) {

            let coin = nestedCoins[key];
            if (!coin.forkedFrom && coin.forks) {
                result[key] = coin;
            }
        }
        return Object.values(result);
    };
</script>

<style scoped>
    .coin-tree {
        padding: 16px;
        overflow-y: scroll;
        width: 100%;
    }
    .tree-parent {
        display: flex;
        flex-direction: column;
    }
</style>
