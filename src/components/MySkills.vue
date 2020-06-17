<template>
  <div class="skills pa-12">
    <section-header text="Skills"/>

    <div class="icons pb-12">
      <v-row justify="center" align="center">
        <v-col v-for="s in skills" :key="s.name" sm="6" cols="10" md="5" lg="3" class="text-center" :data-aos="s.transition">
          <img :src="s.iconSrc" height="200px" />
          <h1 class="display-1">{{ s.name }}</h1>
        </v-col>
      </v-row>
    </div>
    <div class="page-space "></div>
    <arrow-button color="#FFF" @button-clicked="$emit('goToProjects')"> </arrow-button>
  </div>
</template>

<script>
import ArrowButton from './ArrowButton';
import SectionHeader from './SectionHeader';

export default {
  name: 'MySkills',
  props: ['skills'],
  components: {
    'arrow-button': ArrowButton,
    'section-header' : SectionHeader,
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

.skills {
  background-color: $background-main-color;
  color: white;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
