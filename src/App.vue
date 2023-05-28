<template>
  <div id="app">
    <component :is="layout">
      <b-container fluid class="main-container">
        <router-view :layout.sync="layout" />
      </b-container>
    </component>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      layout: 'div',
    };
  },
};
</script>

<style>
#app {
  font-family: 'Noto Sans', 'Roboto', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main-container {
  overflow-y: hidden;
  padding: 0 !important;
  /*min-height: 100vh;*/
}
</style>
