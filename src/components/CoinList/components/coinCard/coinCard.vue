<template>
    <div class="coin-card">
        <div class="coin-main">

            <div class="coin-icon" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}"></div>
            <div v-else class="coin-icon"></div>
            <div class="coin-title">
                <span class="coin-name">{{coin.name}}</span>
                <span class="coin-ticker">{{coin.coin}}</span>
                <span>{{coin.algorithm}}</span>
            </div>
        </div>
        <div class="coin-links">
            <a v-for="(link, key, index) in  coin.links" v-bind:href="link" v-bind:title="key" rel="nofollow" target="_blank" class="coin-link link-website">
                <i v-if="key == 'bitcointalkAnn'" class="fab fa-bitcoin link-icon"></i>
                <i v-else-if="key == 'discord'" class="fab fa-discord link-icon"></i>
                <i v-else-if="key == 'facebook'" class="fab fa-facebook link-icon"></i>
                <i v-else-if="key == 'reddit'" class="fab fa-reddit link-icon"></i>
                <i v-else-if="key == 'telegram'" class="fab fa-telegram link-icon"></i>
                <i v-else-if="key == 'twitter'" class="fab fa-twitter link-icon"></i>
                <i v-else-if="key == 'website'" class="fas fa-globe link-icon"></i>
                <i v-else-if="key == 'repo' && link.includes('github')" class="fab fa-github link-icon"></i>
                <i v-else-if="key == 'repo' && link.includes('bitbucket')" class="fab fa-bitbucket link-icon"></i>
                <i v-else-if="key == 'repo'" class="fas fa-code link-icon"></i>
            </a>
            <a v-if="coin.website" v-bind:href="coin.website" rel="nofollow" target="_blank" class="coin-link link-website">
                <i class="fas fa-globe link-icon"></i>
                <span class="link-text">website</span>
            </a>
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
        </div>
    </div>
</template>

<script>

    export default {
        name: 'coin-card',
        props: ['coin']
    };
</script>

<style scoped>
    .coin-card {
        margin: 8px;
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        padding: 16px;
        background-color: #FDFDFD;
        box-sizing: border-box;
    }
    .coin-main {
        display: flex;
        flex-direction: row;
        margin-bottom: 16px;
        flex-grow: 1;
    }
    .coin-title {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }
    .coin-name {
        color: #3E4542;
        font-size: 20px;
        font-weight: 500;
    }
    .coin-ticker {
        color: #7E8582;
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 8px;
    }
    .coin-icon {
        width: 56px;
        height: 56px;
        margin-right: 16px;
    }
    .coin-icon-placeholder {
        width: 56px;
        height: 56px;
        margin-right: 16px;
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
</style>
