<template>
  <nav>
    <v-app-bar flat fixed dense color="#1f1f1f" inverted-scroll :scroll-threshold="windowHeight - 20">
      <v-app-bar-nav-icon @click="drawer = !drawer" color="white"></v-app-bar-nav-icon>

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
    <v-navigation-drawer v-model="drawer" fixed temporary dark color="black">
      <v-toolbar dense dark>
        <v-toolbar-title>
          Menu
        </v-toolbar-title>
      </v-toolbar>
      <v-list nav dense>
        <!-- <v-list-item-group v-model="group" active-class="white--text"> -->
        <v-list-item @click="$emit('goToAbout'); drawer=false">
          <v-list-item-title>About Me</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$emit('goToExperience'); drawer=false">
          <v-list-item-title>Experience</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$emit('goToSkills'); drawer=false">
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$emit('goToProjects'); drawer=false">
          <v-list-item-title>Projects & Portfolio</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$emit('goToContact'); drawer=false">
          <v-list-item-title>Contact Me</v-list-item-title>
        </v-list-item>
        <!-- </v-list-item-group> -->
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  props: ['windowHeight'],
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style scoped lang="scss"></style>
