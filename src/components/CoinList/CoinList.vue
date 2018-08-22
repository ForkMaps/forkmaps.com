<template>
    <div class="list-page">
        <div class="header-wrapper">
            <div class="list-header">
                <span class="header-item">{{coinCount}} CryptoNote coins</span>
                <div class="input-wrapper">
                    <!--<button @click="sort('coin')">Sort</button>
                    <span>{{coinSort.sortBy}}</span>-->
                </div>
            </div>
        </div>
        <div class="list-content" v-if="coinList">
            <coin-card v-for="(coin, key, index) in  coinList" :coin="coin" :key="coin.coin + coin.name">
            </coin-card>
        </div>
        <!--<span v-for="algo in algos">{{algo}}</span>-->
    </div>
</template>

<script>
    import store from '@/store';
    import CoinCard from './components/CoinCard';
    import { mapActions, mapGetters, mapState } from 'vuex';

    export default {
        name: 'coinList',
        components: {
            'coin-card': CoinCard
        },
        computed: {
            ...mapGetters([
                'algos',
                'coinCount',
                'coinList'
            ]),
            ...mapState({
                coinSort: state => state.coins.coinSort,
                loading: state => state.coins.loading
            })
        },
        methods: {
            ...mapActions([
                'sort'
            ])
        }
    };
</script>

<style scoped>
    .input-wrapper {
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: flex-end;
    }
    .list-page {
        width: 100%;
        background-color: #EEE;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .header-wrapper {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-grow: 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        box-shadow: 1px -1px 5px rgba(0,0,0,0.2);
        box-sizing: border-box;
        z-index: 20;
        background-color: #FCFCFC;
        justify-content: center;
    }
    .list-header {
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-grow: 0;
        font-size: 16px;
        padding: 16px;
        box-sizing: border-box;
    }
    .list-content {
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: scroll;
        box-sizing: border-box;
        padding: 0px;
        /*box-shadow: 1px 1px 5px rgba(0,0,0,0.2);*/
    }
    @media all and (min-width: 600px) {
        .list-content {
            padding: 8px 8px 16px 8px;
        }
    }
    @media all and (min-width: 1600px) {
        .list-header {
            max-width: 1400px;
        }
        .list-content {
            max-width: 1400px;
        }
    }
    @media all and (min-width: 1800px) {
        .list-header {
            max-width: 1600px;
        }
        .list-content {
            max-width: 1600px;
        }
    }
    @media all and (min-width: 2200px) {
        .list-header {
            max-width: 2000px;
        }
        .list-content {
            max-width: 2000px;
        }
    }
</style>
