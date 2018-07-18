<template>
    <div class="nav-bar">
        <span class="app-title">Forknote Tree</span>
        <span></span>
    </div>
</template>

<script>
    export default {
        name: 'nav-bar',
        data () {
            return {}
        }
    };
</script>

<style scoped>
    .nav-bar {
        background-color: #FFFFFF;
        display: flex;
        flex-direction: row;
        padding: 16px;
        border-bottom: 1px solid #30332E55;
    }
    .app-title {
        flex: 1 100%;
    }
</style>
