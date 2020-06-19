<template>
  <nav>
    <v-app-bar
      flat
      fixed
      dense
      color="#1f1f1f"
      inverted-scroll
      :scroll-threshold="windowHeight - 20"
    >
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-app-bar-nav-icon @click="drawer = !drawer" :color="hover ? 'accent' : 'white'"></v-app-bar-nav-icon>
      </v-hover>

      <v-toolbar-title class="white--text text-uppercase">
        <span class="font-weight-black ">Wyatt</span>
        <span class="font-weight-light accent--text">LeFevre</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="https://github.com/wyattlefevre">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
        </v-btn>
      </v-hover>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="https://www.linkedin.com/in/wyatt-lefevre-a22b261a6/">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-linkedin</v-icon>
        </v-btn>
      </v-hover>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary dark color="black">
      <v-toolbar dense dark>
        <v-toolbar-title>
          Menu
        </v-toolbar-title>
      </v-toolbar>
      <v-list nav dense>
        <!-- <v-list-item-group v-model="group" active-class="white--text"> -->
        <v-list-item
          @click="
            $emit('goToAbout');
            drawer = false;
          "
        >
          <v-list-item-title>About Me</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            $emit('goToExperience');
            drawer = false;
          "
        >
          <v-list-item-title>Experience</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            $emit('goToSkills');
            drawer = false;
          "
        >
          <v-list-item-title>Skills</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            $emit('goToProjects');
            drawer = false;
          "
        >
          <v-list-item-title>Projects & Portfolio</v-list-item-title>
        </v-list-item>

        <v-list-item
          @click="
            $emit('goToContact');
            drawer = false;
          "
        >
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
