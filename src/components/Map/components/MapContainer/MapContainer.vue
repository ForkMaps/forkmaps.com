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
    import echarts from 'echarts';
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

                let networkMap = echarts.init(document.getElementById('networkMapContainer'));

                let option = {
                    title: {
                        text: 'Fork Map',
                        top: 'bottom',
                        left: 'right'
                    },
                    tooltip : {},
                    animationDuration: 100,
                    animationEasingUpdate: 'quinticInOut',
                    series: [
                        {
                            name: 'Forks',
                            type: 'graph',
                            layout: 'force',
                            draggable: true,
                            data: Object.values(this.coinMap.data.nodes),
                            links: this.coinMap.data.edges.map((link) => {
                                link.lineStyle = {
                                    curveness: 0.1
                                };
                                return link;
                            }),
                            roam: true,
                            focusNodeAdjacency: true,
                            edgeSymbol: ['circle', 'arrow'],
                            edgeSymbolSize: 5,
                            force: {
                                //initLayout: 'circular',
                                repulsion: [35, 70],
                                //edgeLength: 5,
                                //repulsion: 20,
                                gravity: 0.12
                            },
                        }
                    ],

                };

                networkMap.setOption(option);

                this.mapLoading = false;
/*
                // Get the network container.
                this.container = document.getElementById('networkMapContainer');

                // Initialize the network.
                this.network = new vis.Network(this.container, this.coinMap.data, this.coinMap.options);

                this.network.on('stabilized', (result) => {

                    console.log('iterations to stabilize', result.iterations);
                    this.mapLoaded();
                });
*/
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
