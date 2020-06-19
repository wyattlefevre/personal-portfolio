<template>
  <div class="landing-banner">
    <div class="title">
      <div class="title-words ml-2 mr-2" data-aos="fade-right">
        <h1 :class="[$vuetify.breakpoint.smAndUp ? 'display-2 mb-4 text-no-wrap' : 'display-1 mb-4 text-no-wrap']">
          Hi, I'm <span class="font-weight-bold">Wyatt LeFevre.</span>
        </h1>
        <h2 :class="[$vuetify.breakpoint.smAndUp ? 'display-1 mb-5' : 'headline mb-5']">
          I design and write software, and I love what I do.
        </h2>
      </div>
      <arrow-button color="#000" @button-clicked="$emit('goToAbout')"> </arrow-button>
    </div>
  </div>
</template>

<script>
import ArrowButton from './ArrowButton';
export default {
  name: 'LandingBanner',
  components: {
    'arrow-button' : ArrowButton,
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped lang="scss">
.landing-banner {
  background-image: url('../assets/images/canvas.jpg');
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
  width: 100vw;
  height: 100vh;
}
@media screen and (min-width: 1550px) {
  .landing-banner {
    background-image: url('../assets/images/canvas-wide.jpg');
  }
}

.title {
  color: rgb(0, 0, 0);
  position: absolute;
  min-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
