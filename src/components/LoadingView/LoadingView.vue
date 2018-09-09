<template>
    <div class="loading-wrapper">
        <div class="loading-content">
            <i class="fas fa-life-ring fa-spin loading-icon"></i>
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
        props: {
            detail: String
        }
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
    }
    .loading-icon {
        color: #545554;
        font-size: 24px;
    }
</style>
