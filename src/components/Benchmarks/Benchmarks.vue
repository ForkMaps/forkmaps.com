<template>
    <div class="list-page">
        <div class="header-wrapper">
            <div class="list-header">
                <span class="coin-count" v-if="!loading">{{benchList.length}} Nerva benchmarks</span>
                <div class="input-wrapper">
                    <div class="search-wrapper">
                        <input type="text"
                            class="input-search"
                            v-model="searchTerm"
                            placeholder="search"
                            v-on:keyup.enter="onSearchEnter()"
                            ref="search"/>
                        <i v-if="searchTerm === ''" v-on:click="focusSearch()"
                            class="fas fa-search input-icon">
                        </i>
                        <i v-if="searchTerm != ''" v-on:click="clearSearch()"
                            class="fas fa-times-circle input-icon input-button">
                        </i>
                    </div>
                </div>
            </div>
        </div>

        <loading-view v-if="loading"></loading-view>
        <div class="list-content" v-if="!loading && benchList.length > 0">
            <table style="width:100%">
                <thead>
                    <tr>
                        <th>Processor</th>
                        <th class="right-align">Sockets</th>
                        <th class="right-align">Clock Speed</th>
                        <th class="right-align">RAM Speed</th>
                        <th class="right-align">Mining Threads</th>
                        <th class="right-align">Hashrate</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(bench, key, index) in  benchList" style="font-size: 18px; color: #343534;">
                        <td class="spec-link">
                            <a v-if="bench.make == 'AMD'"
                                v-bind:href="'https://products.amd.com/en-us/search#k=' + bench.model.replace(' ', '%20')"
                                v-bind:title="'Specs'"
                                rel="nofollow" target="_blank"
                                class="spec-link">
                                {{bench.make}} {{bench.model}}
                            </a>
                            <a v-else-if="bench.make == 'Intel'"
                                v-bind:href="'https://ark.intel.com/search?q=' + bench.model.replace(' ', '+')"
                                v-bind:title="'Specs'"
                                rel="nofollow" target="_blank"
                                class="spec-link">
                                {{bench.make}} {{bench.model}}
                            </a>
                            <span v-else class="spec-link">{{bench.make}} {{bench.model}}</span>
                        </td>
                        <td class="right-align">{{bench.sockets}}</td>
                        <td class="right-align">{{bench.cpuFrequency}} {{bench.cpuFrequency ? 'MHz' : ''}}</td>
                        <td class="right-align">{{bench.ramFrequency}} {{bench.ramFrequency ? 'MHz' : ''}}</td>
                        <td class="right-align">{{bench.miningThreads}}</td>
                        <td class="right-align">{{bench.hashrate}} h/s</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import store from '@/store';
    import LoadingView from '@/components/LoadingView';

    export default {
        name: 'benchmarks',
        components: {
            'loading-view': LoadingView
        },
        computed: {
            ...mapGetters([
                'benchList'
            ]),
            ...mapState({
                benchSearch: state => state.benchmarks.benchSearch,
                benchSort: state => state.benchmarks.benchSort,
                benchmarks: state => state.benchmarks.benchmarks,
                loading: state => state.benchmarks.loading
            }),
            searchTerm: {
                get () {
                    return this.benchSearch;
                },
                set (value) {
                    this.search(value);
                }
            }
        },
        data: function () {
            return {
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
            focusSearch () {
                // Remove input focus on enter, mainly for mobile.
                this.$refs.search.focus();
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
            this.$store.dispatch('getBenchmarks', 'nerva');
        }
    };
</script>

<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
    /*height: 100%;*/
    background-color: #FEFEFE;
}
td, th {
    text-align: left;
    padding: 8px;
}
tr:nth-child(even) {
    background-color: #F7F7F7;
}
.spec-link {
    color: #343534;

}
.spec-link:hover {
    color: #53C1B3;
}
.right-align {
    text-align: right;
}
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
    height: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 8px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    -webkit-animation: fadein 0.5s; /* Safari, Chrome and Opera > 12.1 */
    -moz-animation: fadein 0.5s; /* Firefox < 16 */
    -ms-animation: fadein 0.5s; /* Internet Explorer */
    -o-animation: fadein 0.5s; /* Opera < 12.1 */
    animation: fadein 0.5s;
}
@media all and (max-width: 599px) {
    .input-search {
        width: 150px;
    }
    .list-content {
        padding: 0px;
    }
}
@media all and (min-width: 600px) {
    .list-content {

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
