<template>
    <div class="list-page">
        <loading-view v-if="loading"></loading-view>
        <div class="list-content">
            <bar-chart class="chart full" v-if="!loading && forkCounts" v-bind:chart-data="forkCounts"></bar-chart>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import store from '@/store';
    import CoinDialog from '@/components/CoinDialog';
    import LoadingView from '@/components/LoadingView';
    import BarChart from './components/BarChart';

    export default {
        name: 'dashboard',
        components: {
            'bar-chart': BarChart,
            'loading-view': LoadingView
        },
        computed: {
            ...mapGetters([
                'algos',
                'coinCount',
                'forkCounts'
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
                this.selectedCoin = coin;
                this.showDialog = true;
            },
            onSearchEnter () {
                // Remove input focus on enter, mainly for mobile.
                this.$refs.search.blur();
            }
        },
        mounted: function () {


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
    padding: 16px;
}
.list-content {
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    overflow-y: scroll;
    box-sizing: border-box;
    padding: 16px;
    justify-content: center;
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;
}
.chart {
    height: 300px;
    padding: 16px;
    border-radius: 8px;
    background-color: #FEFEFE;
}
.chart.full {
    width: calc(100% - 32px);
}
.chart.half {
    width: calc(50% - 16px);
}
@media all and (max-width: 599px) {
    .list-content {
        padding: 16px 8px;
    }
}
@media all and (min-width: 600px) {

}
@media all and (min-width: 1600px) {
    .list-content {
        max-width: 1400px;
    }
}
@media all and (min-width: 1800px) {
    .list-content {
        max-width: 1600px;
    }
}
@media all and (min-width: 2200px) {
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
