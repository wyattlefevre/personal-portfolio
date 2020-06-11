<template>
  <v-app class="app">
    <v-app-bar flat fixed dense color="#1f1f1f" inverted-scroll :scroll-threshold="windowHeight-20">
      <v-app-bar-nav-icon color="white"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: white">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="white">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="white">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="white">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
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
