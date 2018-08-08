<template>
    <div class="list-page">
        <div class="list-header">
            <span class="header-item">{{coinList.length}} coins</span>
        </div>
        <div class="list-content">
            <coin-row v-for="(coin, key, index) in  coinList" :coin="coin" :key="key">
            </coin-row>
        </div>
    </div>
</template>

<script>
    import CoinRow from './components/coinRow';
    import { mapGetters } from 'vuex';

    export default {
        name: 'coinList',
        components: {
            'coin-row': CoinRow
        },
        computed: {
            ...mapGetters([
                'coinList'
            ])
        }
    };
</script>

<style scoped>
    .list-page {
        width: 100%;
        background-color: #EEE;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .list-header {
        width: 100%;
        max-width: 1100px;
        background-color: #FCFCFC;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-grow: 0;
        border-bottom: 1px solid rgba(0,0,0,0.1);
        font-size: 16px;
        padding: 16px;
        box-sizing: border-box;
        z-index: 20;
        box-shadow: 1px -1px 5px rgba(0,0,0,0.2);
    }
    .list-content {
        width: 100%;
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        overflow-y: scroll;
        box-sizing: border-box;
        box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    }
</style>
