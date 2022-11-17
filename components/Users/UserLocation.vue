<template>
  <b-col sm="12" md="6" id="map-wrap" style="height: 300px">
    <client-only>
      <l-map :zoom="9" :center="[35.699444, 51.337776]">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker :lat-lng="[35.699444, 51.337776]"></l-marker>
      </l-map>
    </client-only>
  </b-col>
</template>

<script>
import 'leaflet/dist/leaflet.css';

export default {
  name: 'UserLocation',
};
</script>
