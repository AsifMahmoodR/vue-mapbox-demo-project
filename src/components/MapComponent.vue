<template>
    <div ref="mapContainer" class="map-container"></div>
</template>

<script>
import MapManager from '../mapping/MapManager'

export default {
    name: 'MapComponent',
    MapManager: null,
    mounted() {
        //debugger; // eslint-disable-line no-debugger
        
        this.MapManager = new MapManager();

        this.MapManager.initMap(this.$refs.mapContainer)
    },
    beforeUnmount() {
        // Clean up map resources
        if (this.map) this.map.remove();
    }
};
</script>

<style>
.map-container {
    width: 100%;
    height: 500px;
}
</style>