<template>
  <v-app class="app">
    <v-app-bar fixed color="primary" dark inverted-scroll :scroll-threshold="windowHeight">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
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

<style></style>
