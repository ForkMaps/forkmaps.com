<template>
    <div class="map-page">
        <map-container v-if="!loading">
        </map-container>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import store from '@/store';
    import MapContainer from './components/MapContainer';

    export default {
        name: 'networkMap',
        components: {
            'map-container': MapContainer
        },
        data () {
            return {}
        },
        computed: {
            ...mapState({
                loading: state => state.coins.loading
            })
        }
    };
</script>

<style scoped>
    .map-page {
        display: flex;
        flex-grow: 1;
        width: 100%;
    }
    .tree-parent {
        display: flex;
        flex-direction: column;
    }
</style>
