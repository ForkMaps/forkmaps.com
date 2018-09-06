<template>
    <transition name="dialog">
        <div class="dialog-wrapper">
            <div class="dialog-container">
                <div class="close-wrapper">
                    <i class="fas fa-fw fa-times close-button" @click="$emit('closeDialog')"></i>
                </div>
                <div class="top-section">
                    <div class="coin-image" v-if="coin.icon" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}">
                    </div>
                    <div class="main-info">
                        <span class="name">{{coin.name}}</span>
                        <span class="ticker">{{coin.coin}}</span>
                    </div>
                </div>
                <div class="link-wrapper">
                    <a v-for="(link, key, index) in  coin.links" v-bind:href="link" v-bind:title="key.charAt(0).toUpperCase() + key.substr(1)" rel="nofollow" target="_blank" class="coin-link">
                        <i v-if="key == 'bitcointalkAnn'" class="fab fa-bitcoin link-icon"></i>
                        <i v-else-if="key == 'discord'" class="fab fa-discord link-icon"></i>
                        <i v-else-if="key == 'facebook'" class="fab fa-facebook link-icon"></i>
                        <i v-else-if="key == 'reddit'" class="fab fa-reddit link-icon"></i>
                        <i v-else-if="key == 'telegram'" class="fab fa-telegram link-icon"></i>
                        <i v-else-if="key == 'twitter'" class="fab fa-twitter link-icon"></i>
                        <i v-else-if="key == 'website'" class="fas fa-globe link-icon"></i>
                        <i v-else-if="key == 'repo' && link.includes('github')" class="fab fa-github link-icon"></i>
                        <i v-else-if="key == 'repo' && link.includes('gitlab')" class="fab fa-gitlab link-icon"></i>
                        <i v-else-if="key == 'repo' && link.includes('bitbucket')" class="fab fa-bitbucket link-icon"></i>
                        <i v-else-if="key == 'repo'" class="fas fa-code link-icon"></i>
                    </a>
                </div>
                <span class="info algo">{{coin.algorithm}}</span>
                <span class="info label">Algorithm</span>
                <span class="info algo" v-if="forks.length > 0">{{forks.length}}</span>
                <span class="info label" v-if="forks.length > 0">fork{{forks.length == 1 ? '' : 's'}}</span>

            </div>
        </div>
    </transition>
</template>

<script>
    import { mapActions, mapGetters, mapState } from 'vuex';
    import store from '@/store';

    export default {
        name: 'coinDialog',
        props: ['coin'],
        computed: {
            ...mapGetters([
                'coinForks'
            ]),
            forks: {
                get () {
                    return this.coinForks(this.coin.key);
                }
            }
        },
    };
</script>

<style scoped>
.dialog-wrapper {
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.6);
    z-index: 9998;
    transition: opacity .3s ease;
}
.dialog-container {
    flex-grow: 0;
    flex-shrink: 0;
    background-color: #FAFAFA;
    display: flex;
    flex-direction: column;
    transition: all .3s ease;
    box-sizing: border-box;
    max-width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
    padding-bottom: 8px;
    max-height: calc(100vh - 16px);
}
.dialog-enter {
    opacity: 0;
}
.dialog-leave-active {
    opacity: 0;
}
.dialog-enter .dialog-container,
.dialog-leave-active .dialog-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
.close-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background-color: #FEFEFE;
    flex-shrink: 0;
}
.close-button {
    text-align: right;
    font-size: 22px;
    color: #9B9B9B;
    padding: 8px;
}
.close-button:hover {
    color: #53C1B3;
    cursor: pointer;
}
.top-section {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 8px 32px 24px 32px;
    background-color: #FEFEFE;
}
.coin-image {
    width: 96px;
    height: 96px;
    flex-shrink: 0;
}
.main-info {
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    padding-left: 16px;
}
.info {
    text-align: center;
    padding: 0px 16px;
}
.name {
    font-size: 24px;
    color: #2A2B30;
    word-wrap:break-word;
}
.ticker {
    font-size: 18px;
    color: #4C555B;
}
.algo {
    font-size: 22px;
    color: #2A2B30;
}
.label {
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 600;
    color: #758290;
    padding-bottom: 16px;
}
.link-wrapper {
    display: flex;
    flex-grow: 0;
    flex-shrink: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border-top: 1px solid #EEE;
    border-bottom: 1px solid #EEE;
    background-color: #FFFFFF;
}
.coin-link {
    color: #758290;
    font-size: 24px;
    padding: 8px 6px;
}
.coin-link:hover {
    color: #53C1B3;
}
/* Mobile */
@media all and (max-width: 599px) {
    .dialog-container {
        margin: 0px;
        width: calc(100vw - 16px);
        max-height: calc(100vh - 8px);
    }
}
/* Mobile landscape */
@media all and (max-height: 599px) and (orientation:landscape) {
    .dialog-container {
        margin: 0px;
        max-width: calc(100vw - 16px);
        max-height: calc(100vh - 8px);
        overflow-y: scroll;
    }
}
@media all and (min-width: 600px) {
    .dialog-container {
        min-width: 400px;
        max-width: calc(100vw - 16px);
    }
}
@media all and (min-width: 900px) {
    .dialog-container {


    }
}
</style>
