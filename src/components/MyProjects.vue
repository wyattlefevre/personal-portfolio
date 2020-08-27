<template>
  <div class="projects">
    <section-header text="Projects & Portfolio" />
    <v-row class="ml-4 mr-4" v-for="(project, index) in projects" :key="index" justify="center">
      <v-col>
        <v-card :color="project.color" :data-aos="project.transition">
          <v-img class="align-end" max-height="70vh" :src="project.imgSrc">
            <v-card-title v-if="project.whiteTitle" class="text-lg-h3 white--text">{{ project.name }}</v-card-title>
            <v-card-title v-else class="text-lg-h3">{{ project.name }}</v-card-title>
          </v-img>
          <v-card-actions>
            <v-row class="ml-2 mr-2">
              <v-col cols="12" lg="9">
                <span v-if="project.whiteDescription" class="text-lg-h5 white--text">{{ project.description }}</span>
                <span v-else class="text-lg-h5">{{ project.description }}</span>
              </v-col>
              <v-col cols="12" lg="3" class="text-end">
                <v-btn
                  v-if="project.demo === 'https://wyattlefevre.com/'"
                  class="mr-2"
                  dark
                  @click="$emit('goToTop')"
                  >Demo</v-btn>
                <v-btn v-else class="mr-2" dark :href="project.demo" target="_blank">Demo</v-btn>
                <v-btn dark :href="project.github" target="_blank">Source</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import SectionHeader from './SectionHeader';

export default {
  name: 'MyProjects',
  props: ['projects'],
  components: {
    'section-header': SectionHeader,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
$background-main-color: #121212;
$background-secondary-color: #000;
$card-color: #1d1d1d;
$card-color-light: #1f1f1f;
$accent-color: #bb86fc;
.projects {
  color: white;
  min-height: 100vh;
  background-color: $background-main-color;
}
</style>
