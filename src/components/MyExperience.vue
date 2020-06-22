<template>
  <div class="my-experience">
    <!-- <h1 class="display-4 text-center font-weight-black pb-12 pt-12">Experience</h1> -->
    <section-header text="Experience"/>
    <display-cards :items="experiences" colorAll="#1d1d1d" cols="12"></display-cards>
    <!-- <arrow-button color="#FFF" @button-clicked="$emit('goToSkills')"> </arrow-button> -->
  </div>
</template>

<script>
import DisplayCards from './DisplayCards';
// import ArrowButton from './ArrowButton';
import SectionHeader from './SectionHeader';
export default {
  name: 'MyExperience',
  props: ['experiences'],
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
//Colors:
$background-main-color: #121212;
$background-secondary-color: #000;
$card-color: #1d1d1d;
$card-color-light: #1f1f1f;
$accent-color: #bb86fc;

.my-experience {
  min-height: 100vh;
  background-color: $background-main-color;
  color: white;
}
</style>
