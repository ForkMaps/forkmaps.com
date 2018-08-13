<template>
    <div class="list-page">
        <div class="header-wrapper">
            <div class="list-header">
                <span class="header-item">{{coinList.length}} CryptoNote coins</span>
                <div class="input-wrapper">
                    
                </div>
            </div>
        </div>
        <div class="list-content">
            <coin-card v-for="(coin, key, index) in  coinList" :coin="coin" :key="key">
            </coin-card>
        </div>
    </div>
</template>

<script>
    import CoinCard from './components/coinCard';
    import CoinRow from './components/coinRow';
    import { mapGetters } from 'vuex';

    export default {
        name: 'coinList',
        components: {
            'coin-card': CoinCard,
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
    @media all and (min-width: 1800px) {
        .coin-card {
            width: calc((100% /4) - 16px);
        }
        .list-header {
            max-width: 1600px;
        }
        .list-content {
            max-width: 1600px;
        }
    }
</style>
