<template>
    <div class="submit-page">

    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';

    export default {
        name: 'submitCoin',
        components: {
        },
        computed: {
            ...mapGetters([
                'algos',
                'coinList'
            ])
        },
        methods: {
        }
    };
</script>

<style scoped>
    .submit-page {
        width: 100%;
        background-color: #EEE;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
