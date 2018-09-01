<template>
    <div style="width: 100%; height: 100%; position: relative;">
        <div id="networkMapContainer" style="width: 100%; height: 100%">
        </div>
        <div v-if="mapLoading" class="loading-container">
            <loading-view detail="map"></loading-view>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import store from '@/store';
    import LoadingView from '@/components/LoadingView';

    export default {
        name: 'mapContainer',
        data: function () {
            return {
                mapLoading: true
            }
        },
        components: {
            'loading-view': LoadingView
        },
        computed: {
            ...mapGetters([
                'coinMap'
            ])
        },
        methods: {
            loadMap: function () {

                // Get the network container.
                this.container = document.getElementById('networkMapContainer');

                // Initialize the network.
                this.network = new vis.Network(this.container, this.coinMap.data, this.coinMap.options);

                this.network.on('stabilized', (result) => {

                    console.log('iterations to stabilize', result.iterations);
                    this.mapLoaded();
                });
            },
            mapLoaded: function () {

                this.mapLoading = false;
            }
        },
        mounted: function () {

            this.loadMap();
        }
    };
</script>

<style scoped>
    .loading-container {
        position: absolute;
        top: 0px;
        left: 0px;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.1);
    }
</style>
