<template>
  <v-app class="app">
    <h1>Test</h1>
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },

  data: () => ({
    //
  }),
};
</script>

<style>
.app {
  background-color: black !important;
}

.app h1 {
  color: red;

}
</style>


