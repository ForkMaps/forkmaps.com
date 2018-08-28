<template>
    <div class="coin-card" @click="$emit('openDialog')">
        <div class="coin-icon-wrapper">
            <div class="coin-icon" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}"></div>
            <div v-else class="coin-icon"></div>
            <span class="coin-symbol">
                {{coin.coin}}
            </span>
        </div>
        <div class="coin-main">
            <div class="coin-info">
                <span class="coin-name">{{coin.name}}</span>
                <span class="coin-algo">{{coin.algorithm}}</span>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'coinCard',
        props: ['coin']
    };
</script>

<style scoped>
    .coin-card {
        margin: 8px;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        /*padding: 16px;*/
        background-color: #FEFEFE;
        box-sizing: border-box;
    }
    .coin-card:hover {
        cursor: pointer;
        background-color: #FFFFFF;
    }
    .coin-icon-wrapper {
        display: flex;
        flex-grow: 0;
        flex-shrink: 0;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 2px rgba(0,0,0,0.2);
    }
    .coin-icon {
        width: 56px;
        min-height: 56px;
        margin: 16px;
        flex-grow: 1;
    }
    .coin-icon-placeholder {
        width: 56px;
        height: 56px;
        margin-right: 16px;
    }
    .coin-symbol {
        width: 100%;
        text-align: center;
        padding: 6px 0px;
        background-color: #556270;
        color: #FFFFFF;
        font-weight: 600;
        font-size: 16px;
    }
    .coin-main {
        display: flex;
        flex-direction: column;
        /*margin-bottom: 16px;*/
        flex-grow: 1;
    }
    .coin-info {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        padding: 16px;
    }
    .coin-name {
        color: #4E5552;
        font-size: 20px;
        font-weight: 600;
        padding-bottom: 4px;
    }
    .coin-algo {
        color: #4E5552;
        font-size: 16px;
    }
    .coin-links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
    .coin-link {
        font-size: 18px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
        padding: 8px 8px;
    }
    .coin-link:hover {
        color: #6E7572;
    }
    .link-website {
        color: #3ABEFF;
    }
    .link-repo {
        color: #343534;
    }
    @media all and (max-width: 599px) {
        .coin-card {
            margin: 0px;
            width: 100%;
            margin-bottom: 2px;
        }
    }
    @media all and (min-width: 600px) {
        .coin-card {
            width: calc((100% /2) - 16px);
            box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
        }
        .coin-card:hover {
            box-shadow: 0 1px 3px rgba(0,0,0,0.36), 0 1px 3px rgba(0,0,0,0.43);
        }
    }
    @media all and (min-width: 900px) {
        .coin-card {
            width: calc((100% /3) - 16px);
        }
    }
    @media all and (min-width: 1200px) {
        .coin-card {
            width: calc((100% /3) - 16px);
        }
    }
    @media all and (min-width: 1800px) {
        .coin-card {
            width: calc((100% /4) - 16px);
        }
    }
    @media all and (min-width: 2200px) {
        .coin-card {
            width: calc((100% /5) - 16px);
        }
    }
</style>
