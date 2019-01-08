<template>
    <div class="coin-card">
        <div class="card-content"  @click="$emit('openDialog')">
            <!-- Icon and ticker -->
            <div class="card-section column icon">
                <div class="card-section icon-wrapper">
                    <div class="card-icon" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}"></div>
                    <div v-else class="card-icon"></div>
                </div>
            </div>
            <!-- Coin info -->
            <div class="card-section column info">
                <div class="card-section title-wrapper">
                    <span class="coin-ticker">{{coin.coin}}</span>
                    <span class="coin-name">{{coin.name}}</span>
                    <span class="icon-ticker">{{coin.coin}}</span>
                </div>
                <span class="coin-algo">{{coin.algorithm}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'coinCard',
        props: {
            coin: Object
        }
    };
</script>

<style scoped>
    .coin-card {
        padding: 8px 8px;
        display: flex;
        flex-direction: row;
        flex-shrink: 0;
        box-sizing: border-box;
    }
    .card-content {
        padding: 16px;
        display: flex;
        flex: 1;
        flex-direction: column;
        background-color: #FEFEFE;
    }
    .card-content:hover {
        cursor: pointer;
    }
    .card-section {
        display: flex;
    }
    .card-section.icon {
        align-items: center;
        justify-content: center;
    }
    .card-section.info {
        flex: 1;
    }
    .card-section.column {
        flex-direction: column;
    }
    .card-section.row {
        flex-direction: row;
    }
    .card-icon {
        width: 56px;
        height: 56px;
        margin: 0px;
    }
    .icon-ticker {
        text-align: center;
        color: #4C555B;
        font-weight: 400;
        font-size: 16px;
        border-radius: 8px;
    }
    .coin-name {
        color: #4C555B;
        font-weight: 400;
    }
    .coin-algo {
        color: #566168;
        font-size: 16px;
        padding-top: 6px;
    }
    .coin-ticker {
        color: #566168;
        font-size: 18px;
        font-weight: 600;
        padding-right: 6px;
        margin-right: 6px;
        box-shadow: 1px 0px 0px rgba(0,0,0,0.30);
    }
    .inactive-card {
        background-color: #EFEFEF;
    }
    .inactive-icon {
        opacity: 0.5;
    }
    .inactive-text {
        color: #888;
        text-shadow: 1px 1px #FFF;
    }
    @media all and (max-width: 599px) {
        .coin-card {
            padding: 0;
            margin: 1px 0px 0px 0px;
            width: 100vw;
        }
        .card-content {
            flex-direction: row;
            box-shadow: 0 1px 0px rgba(0,0,0,0.16);
        }
        .card-icon {
            width: 64px;
            height: 64px;
            margin: 0px;
        }
        .card-section.icon {
            flex: 0;
            width: 64px;
        }
        .icon-ticker {
            display: none;
        }
        .coin-name {
            font-size: 18px;
        }
        .card-section.icon {
            margin-right: 16px;
        }
        .title-wrapper {
            align-items: baseline;
            flex-direction: row;
        }
    }
    @media all and (min-width: 600px) {
        .coin-card {
            width: calc((100vw - 16px) / 3);
            height: calc(((100vw - 16px) / 3) * 1.2);
        }
        .card-content {
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0,0,0,0.16), 0 1px 3px rgba(0,0,0,0.23);
        }
        .card-content:hover {
            box-shadow: 0 1px 3px rgba(0,0,0,0.36), 0 1px 3px rgba(0,0,0,0.43);
        }
        .icon-wrapper {
            padding: 8px;
            border-radius: 16px;
            margin-bottom: 8px;
            width: 100%;
            height: 100%;
        }
        .card-icon {
            width: 100%;
            height: 100%;
            margin: 0px;
        }
        .coin-ticker {
            display: none;
        }
        .coin-name {
            font-size: 16px;
            text-align: center;
            font-weight: 600;
        }
        .coin-algo {
            text-align: center;
            flex: 1;
        }
        .title-wrapper {
            flex-direction: column;
            flex: 2;
        }
        .card-section.icon {
            flex: 1;
            justify-content: flex-end;
        }
    }
    @media all and (min-width: 900px) {
        .coin-card {
            width: calc((100vw - 16px) / 4);
            height: calc(((100vw - 16px) / 4) * 1.2);
        }
    }
    @media all and (min-width: 1100px) {
        .coin-card {
            width: calc(1084px / 5);
            height: calc((1084px / 5) * 1.2);
        }
    }
    @media all and (min-width: 1600px) {
        .coin-card {
            width: calc(1384px / 5);
            height: calc((1384px / 5) * 1.2);
        }
    }
    @media all and (min-width: 1800px) {
        .coin-card {
            width: calc(1584px / 5);
            height: calc((1584px / 5) * 1.2);
        }
    }
    @media all and (min-width: 2200px) {
        .coin-card {
            width: calc(1984px / 5);
            height: calc((1394px / 5) * 1.2);
        }
    }
</style>
