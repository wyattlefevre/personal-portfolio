<template>
  <v-app class="app">
    <router-view />
  </v-app>
</template>

<script>
import {vueWindowSizeMixin} from 'vue-window-size';

export default {
  name: 'App',
  components: {},
  computed: {
  },
  mixins: [vueWindowSizeMixin],

  data: () => ({
  }),
};
</script>

<style>

</style>
