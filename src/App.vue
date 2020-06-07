<template>
  <v-app class="app">
    <!-- <v-app-bar flat fixed color="#FFFA" inverted-scroll :scroll-threshold="windowHeight-20">
      <v-app-bar-nav-icon color="black"></v-app-bar-nav-icon>

      <v-toolbar-title style="color: black">Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon color="black">mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="black">mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon color="black">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar> -->
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
