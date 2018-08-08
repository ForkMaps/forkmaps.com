<template>
    <div class="coin-row">
        <div class="coin-icon" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}"></div>
        <div v-else class="coin-icon"></div>
        <!--<img v-if="coin.icon" v-bind:src="coin.icon" class="coin-icon" />-->
        <div v-else class="coin-icon-placeholder"></div>
        <div class="coin-title">
            <span class="coin-name">{{coin.name}}</span>
            <span class="coin-ticker">{{coin.coin}}</span>
        </div>
        <a v-if="coin.website" v-bind:href="coin.website" rel="nofollow" target="_blank" class="coin-link link-website">
            <i class="fas fa-globe link-icon"></i>
            <span class="link-text">website</span>
        </a>
        <!--<a v-if="coin.website" v-bind:href="coin.website" target="_blank" class="coin-link link-website">
            <i class="fas fa-external-link-alt"></i>
        </a>-->
        <!--<a v-if="coin.repo" v-bind:href="coin.website" target="_blank" class="coin-link link-repo">
            <i v-if="coin.repo.includes('github')" class="fab fa-github"></i>
            <i v-if="coin.repo.includes('bitbucket')" class="fab fa-bitbucket"></i>
        </a>-->
        <a v-if="coin.repo" v-bind:href="coin.repo" target="_blank" class="coin-link link-repo">
            <!-- Icon links -->
            <i v-if="coin.repo.includes('github')" class="fab fa-github link-icon"></i>
            <i v-else-if="coin.repo.includes('bitbucket')" class="fab fa-bitbucket link-icon"></i>
            <i v-else class="fas fa-code link-icon"></i>
            <!-- Span links -->
            <span v-if="coin.repo.includes('github')" class="link-text">github</span>
            <span v-else-if="coin.repo.includes('bitbucket')" class="link-text">bitbucket</span>
            <span v-else class="link-text">repo</span>
        </a>
        <!--<div style="width: 52px; height: 52px; background-color: #000;"></div>-->
    </div>
</template>

<script>

    export default {
        name: 'coin-row',
        props: ['coin']
    };
</script>

<style scoped>
    .coin-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-shrink: 0;
        padding: 8px 16px;
        background-color: #FDFDFD;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        box-sizing: border-box;
    }
    .coin-title {
        display: flex;
        flex-grow: 1;
    }
    .coin-name {
        color: #3E4542;
        font-size: 20px;
        font-weight: 500;
    }
    .coin-ticker {
        color: #7E8582;
        font-weight: 700;
        font-size: 14px;
    }
    .coin-icon {
        width: 36px;
        height: 36px;
        margin: 8px 16px 8px 0px;
    }
    .coin-icon-placeholder {
        width: 32px;
        height: 32px;
        margin-right: 16px;
    }
    .with-divider {
        border-bottom: 1px solid #CCC;
    }
    .coin-link {
        font-size: 16px;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 500;
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
    @media screen and (orientation:portrait) {
        .coin-row {

        }
        .coin-title {
            flex-direction: column;
        }
        .coin-ticker {

        }
        .coin-link {
            font-size: 24px;
            margin-left: 16px;
        }
        .link-text {
            display: none;
        }
    }
    @media screen and (orientation:landscape) {
        .coin-title {
            flex-direction: row;
            align-items: baseline;
        }
        .coin-ticker {
            padding-left: 8px;
        }
        .coin-link {
            padding: 8px 16px;
        }
        .link-icon {
            display: none;
        }
    }
</style>
