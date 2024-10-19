import mapboxgl from 'mapbox-gl';

class MapManager {

  map = null;
  /**
   *
   */
  constructor() {
    mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_ACCESS_TOKEN;
  }

  initMap(mapContainer) {
    this.map = new mapboxgl.Map({
      container: mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11', // map style
      center: [-0.1276, 51.5072], // starting position [lng, lat]
      zoom: 10 // starting zoom
    });

    this.setDefaultMarker();

    this.configure3DBuildingsLayer();
  }

  setDefaultMarker() {
    new mapboxgl.Marker()
      .setLngLat([-0.1276, 51.5072])
      .setPopup(new mapboxgl.Popup().setText("This is London!"))
      .addTo(this.map);
  }

  configure3DBuildingsLayer() {
    this.map.on('load', () => {
      // Add 3D buildings layer
      this.map.addLayer({
        'id': '3d-buildings',
        'source': 'composite',
        'source-layer': 'building',
        'filter': ['==', 'extrude', 'true'],
        'type': 'fill-extrusion',
        'minzoom': 15,
        'paint': {
          'fill-extrusion-color': '#aaa',
          'fill-extrusion-height': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "height"]
          ],
          'fill-extrusion-base': [
            "interpolate", ["linear"], ["zoom"],
            15, 0,
            15.05, ["get", "min_height"]
          ],
          'fill-extrusion-opacity': 0.6
        }
      });
    });
  }
}


export default MapManager;