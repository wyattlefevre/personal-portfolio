<template>
  <div class="projects">

    <section-header text="Projects & Portfolio"/>
    <display-cards :items="projects" cols="12"></display-cards>
    <!-- <arrow-button class="pa-12" color="#FFF" @button-clicked="$emit('goToContact')"> </arrow-button> -->
  </div>
</template>

<script>
import DisplayCards from './DisplayCards';
// import ArrowButton from './ArrowButton';
import SectionHeader from './SectionHeader';

export default {
  name: 'MyProjects',
  props: ['projects'],
  components: {
    // 'arrow-button': ArrowButton,
    'display-cards': DisplayCards,
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
.projects {
  color: white;
  min-height: 100vh;
  background-color: $background-main-color;
}
</style>
