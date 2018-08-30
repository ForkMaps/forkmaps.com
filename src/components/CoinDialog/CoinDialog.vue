<template>
    <transition name="dialog">
        <div class="dialog-wrapper">
            <div class="dialog-container">
                <div class="close-wrapper">
                    <i class="fas fa-fw fa-times close-button" @click="$emit('closeDialog')"></i>
                </div>
                <div class="coin-image" v-bind:style="{'background': 'url(' + coin.icon + ')  no-repeat center center', 'background-size': 'contain'}">
                </div>
                <span class="info name">{{coin.name}}</span>
                <span class="info ticker">{{coin.coin}}</span>
                <span class="info algo">{{coin.algorithm}}</span>
                <span class="info label">Algorithm</span>
                <span class="info algo" v-if="forks.length > 0">{{forks.length}}</span>
                <span class="info label" v-if="forks.length > 0">fork{{forks.length == 1 ? '' : 's'}}</span>
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
                        <i v-else-if="key == 'repo' && link.includes('bitbucket')" class="fab fa-bitbucket link-icon"></i>
                        <i v-else-if="key == 'repo'" class="fas fa-code link-icon"></i>
                    </a>
                </div>
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
    background-color: #FCFCFE;
    display: flex;
    flex-direction: column;
    transition: all .3s ease;
    max-width: 100%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
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
}
.close-button {
    text-align: right;
    font-size: 22px;
    color: #9B9B9B;
    padding: 8px;
}
.close-button:hover {
    color: rgba(0,0,0,0.2);
}
.coin-image {
    width: 100%;
    height: 128px;
    margin-bottom: 8px;
}
.info {
    text-align: center;
    padding: 0px 16px;
}
.name {
    font-size: 28px;
    padding-bottom: 8px;
}
.ticker {
    font-size: 20px;
    color: #FEFEFE;
    background-color: #758290;
    padding: 6px;
    margin: 8px 0px 16px 0px;;
    font-weight: 600;
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
    padding-bottom: 8px;
}
.coin-link {
    color: #9B9B9B;
    font-size: 24px;
    padding: 8px 4px;
}
.coin-link:hover {
    color: #53C1B3;
}
@media all and (max-width: 599px) {
    .dialog-container {
        margin: 0px;
        width: calc(100vw - 16px);
        height: 100vh;
    }
}
@media all and (min-width: 600px) {
    .dialog-container {
        min-width: 400px;
    }
}
</style>
