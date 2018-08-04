<template>
    <div class="coin-list">
        <div class="list-content">
            <coin-row v-for="(coin, key, index) in  coinList" :coin="coin" :key="key">
            </coin-row>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
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
    .coin-list {
        width: 100%;
        overflow-y: scroll;
        justify-content: center;
        display: flex;
        flex-direction: row;
    }
    .list-content {
        max-width: 1100px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 1;
        padding: 16px;
    }
</style>
