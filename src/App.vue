<template>
  <h1>Vue MapBox Demo Project </h1>
  <h2>Created By: Asif Mahmood</h2>
  <MapComponent />
</template>

<script>
import MapComponent from './components/MapComponent.vue'

export default {
  name: 'App',
  components: {
    MapComponent
  },
  data() {
    return {
      pageTitle: 'Vue MapBox Demo App'
    };
  },
  watch: {
    pageTitle(newTitle) {
      document.title = newTitle;
    }
  },
  mounted() {
    document.title = this.pageTitle;
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
