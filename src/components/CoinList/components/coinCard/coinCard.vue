<template>
    <div class="coin-card">
        <img v-if="coin.icon" v-bind:src="coin.icon" class="coin-icon" />
        <div v-else class="coin-icon-placeholder"></div>
        <span class="coin-title">{{coin.name}} ({{coin.coin}})</span>
        <a v-if="coin.website" v-bind:href="coin.website" target="_blank" class="coin-link link-website">
            <span>website</span>
        </a>
        <!--<a v-if="coin.website" v-bind:href="coin.website" target="_blank" class="coin-link link-website">
            <i class="fas fa-external-link-alt"></i>
        </a>-->
        <!--<a v-if="coin.repo" v-bind:href="coin.website" target="_blank" class="coin-link link-repo">
            <i v-if="coin.repo.includes('github')" class="fab fa-github"></i>
            <i v-if="coin.repo.includes('bitbucket')" class="fab fa-bitbucket"></i>
        </a>-->
        <a v-if="coin.repo" v-bind:href="coin.repo" target="_blank" class="coin-link link-repo">
            <span v-if="coin.repo.includes('github')">github</span>
            <span v-else-if="coin.repo.includes('bitbucket')">bitbucket</span>
            <span v-else>repo</span>
        </a>
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
        padding: 16px;
        display: flex;
        flex-direction: row;
        flex-grow: 1 100%;
        align-items: center;
    }
    .coin-title {
        color: #2E3532;
        flex-grow: 1;
        font-size: 20px;
    }
    .coin-icon {
        width: 32px;
        height: auto;
        margin-right: 16px;
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
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        margin-left: 8px;
        font-weight: 500;
        padding: 8px 16px;
        border: 1px solid;
        border-radius: 24px;
    }
    .coin-link:hover {
        color: #6E7572;
    }
    .link-website {
        color: #30C5FF;
    }
    .link-repo {
        color: #24292F;
    }
</style>
