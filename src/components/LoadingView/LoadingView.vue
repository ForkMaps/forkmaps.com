<template>
    <div class="loading-wrapper">
        <div class="loading-content">
            <i class="fas fa-cog fa-spin loading-icon"></i>
            <!--<div class="la-square-jelly-box la-3x">
                <div></div>
                <div></div>
            </div>-->
            <span class="loading-text">{{loadingMessage}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'loadingView',
        computed: {
            loadingMessage: function () {
                let message = ['Loading'];
                if (this.detail && this.detail != '') {
                    message.push(this.detail);
                }
                return message.join(' ');
            }
        },
        props: ['detail']
    };
</script>

<style scoped>
    .la-square-jelly-box {
        color: #53C1B3;
    }
    .loading-wrapper {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .loading-content {
        display: flex;
        align-items: center;
        flex-direction: row;
    }
    .loading-text {
        text-align: center;
        text-transform: uppercase;
        color: #545554;
        font-weight: 700;
        font-size: 18px;
        padding-left: 8px;
        text-shadow: 0px 0px 3px rgba(255,255,255,0.75);
    }
    .loading-icon {
        color: #B0ED2B;
        font-size: 36px;
        text-shadow: 0px 0px 1px rgba(0,0,0,0.7);
    }
</style>
