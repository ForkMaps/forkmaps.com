<template>
    <div class="tree-node" v-bind:class="{ 'left-border': !isLast }">
        <div class="coin-card">
            <!--<div class="card-left" v-if="coin.forkedFrom"></div>-->
            <div class="coin-icon-wrapper">
                <div class="coin-icon" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}"></div>
                <div v-else class="coin-icon-placeholder">
                    <div style="text-align: center; width: 100%; color: #FFFFFF; font-size: 22px; font-weight: 700; padding-top: 10px;">{{coin.coin[0]}}</div>
                </div>
            </div>
            <div class="coin-card-text">
                <span>{{coin.name}}</span>
                <span>{{coin.coin}}</span>
            </div>
        </div>

        <!-- Children -->
        <tree-node v-if="coin.forks" v-for="(fork, index) in coin.forks" :is-last="index == coin.forks.length - 1" :coin="fork" :key="index">

        </tree-node>
    </div>
</template>

<script>

    export default {
        name: 'tree-node',
        props: {
            coin: Object,
            isLast: Boolean
        }
    };
</script>

<style scoped>
    .tree-node {
        display: flex;
        flex-direction: column;
        padding: 8px 0px 8px 0px;;
        padding-top: 16px;
        margin-left: 24px;
    }
    .coin-card {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .card-left {
        width: 24px;
        height: 48px;
        border-left: 2px solid;
    }
    .coin-icon {
        width: 100%;
        height: 100%;
    }
    .coin-icon-wrapper {
        width: 48px;
        height: 48px;
        /*border: 2px solid green;
        border-radius: 50%;*/
    }
    .coin-icon-placeholder {
        background-color: deeppink;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .coin-card-text {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding-left: 8px;
        margin-left: 4px;
    }
    .left-border {
        /*box-shadow: -1px 0px;*/
    }
</style>
