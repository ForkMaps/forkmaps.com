<template>
    <div class="list-page">
        <div class="header-wrapper">
            <div class="list-header">
                <span class="coin-count" v-if="!loading">{{coinList.length}} coins</span>
                <div class="input-wrapper">
                    <div class="search-wrapper">
                        <input type="text"
                            class="input-search"
                            v-model="searchTerm"
                            placeholder="search"/>
                        <i v-if="searchTerm === ''" class="fas fa-search input-icon"></i>
                        <i v-if="searchTerm != ''" v-on:click="clearSearch()"
                            class="fas fa-times-circle input-icon input-button">
                        </i>
                    </div>
                </div>
            </div>
        </div>
        <loading-view v-if="loading"></loading-view>
        <div class="list-content" v-if="!loading && coinList.length > 0">
            <coin-card v-for="(coin, key, index) in  coinList"
                :coin="coin" :key="coin.coin + coin.name"
                @openDialog="openDialog(coin)">
            </coin-card>
        </div>
        <coin-dialog v-if="showDialog" @closeDialog="hideDialog()" :coin="selectedCoin"></coin-dialog>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import store from '@/store';
    import CoinDialog from '@/components/CoinDialog';
    import LoadingView from '@/components/LoadingView';
    import CoinCard from './components/CoinCard';

    export default {
        name: 'coinList',
        components: {
            'coin-dialog': CoinDialog,
            'coin-card': CoinCard,
            'loading-view': LoadingView
        },
        computed: {
            ...mapGetters([
                'algos',
                'coinCount',
                'coinList'
            ]),
            ...mapState({
                coinSearch: state => state.coins.coinSearch,
                coinSort: state => state.coins.coinSort,
                loading: state => state.coins.loading
            }),
            searchTerm: {
                get () {
                    return this.coinSearch;
                },
                set (value) {
                    this.search(value);
                }
            }
        },
        data: function () {
            return {
                selectedCoin: null,
                showDialog: false
            }
        },
        methods: {
            ...mapActions([
                'search',
                'sort'
            ]),
            clearSearch () {
                this.search('');
            },
            hideDialog () {
                this.showDialog = false;
                this.selectedCoin = null;
            },
            openDialog (coin) {
                console.log('open dialog', coin);
                this.selectedCoin = coin;
                this.showDialog = true;
            }
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
.search-wrapper {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    padding: 2px 4px;
}
.search-wrapper:focus-within {
    box-shadow: 0px 1px 0px #AAA;
}
.input-search {
    font-size: 18px;
    font-weight: 600;
    border: 0px;
    outline: none;
    color: #4E5552;
}
::placeholder {
    color: #AAA;
}
::-ms-input-placeholder { /* Microsoft Edge */
    color: #AAA;
}
.coin-count {
    color: #4E5552;
    font-weight: 400;
}
.input-icon {
    color: #AAA;
    font-size: 18px;
    padding: 4px;
}
.input-button:hover {
    color: #CC5858;
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
    padding: 12px;
    box-sizing: border-box;
    align-items: center;
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
    -webkit-animation: fadein 1s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 1s; /* Firefox < 16 */
    -ms-animation: fadein 1s; /* Internet Explorer */
    -o-animation: fadein 1s; /* Opera < 12.1 */
    animation: fadein 1s;
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

@keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
}
</style>
