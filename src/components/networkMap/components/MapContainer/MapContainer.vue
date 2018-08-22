<template>
    <div id="networkMapContainer" style="width: 100%;">
    </div>
</template>

<script>
    import store from '@/store';
    import { mapGetters } from 'vuex';

    export default {
        name: 'mapContainer',
        data () {
            return {}
        },
        computed: {
            ...mapGetters([
                'coinMap'
            ])
        },
        mounted: function () {

            // Get the network container.
            this.container = document.getElementById('networkMapContainer');

            // Initialize the network.
            this.network = new vis.Network(this.container, this.coinMap.data, this.coinMap.options);
        }
    };
</script>

<style scoped>

</style>
