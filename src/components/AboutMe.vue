<template>
  <div class="about-me">
    <v-container ma-0 pa-0 fluid>
      <v-row align="center" justify="center">
        <v-col cols="8">
          <v-row justify="center" class="mt-4">
            <v-col>
              <!-- <p :class="[$vuetify.breakpoint.mdAndUp ? 'display-1' : 'title']" data-aos="fade-right"> -->
              <p class="display-1 font-weight-black text-justify" data-aos="fade-right" v-if="$vuetify.breakpoint.smAndUp">
                Hello! I am a self driven developer and student. I love to get sucked into interesting projects filled with difficult problems that
                require creative solutions. I currently work in a team as a full stack web developer and I am pursuing a degree in Computer Science
                with an emphasis in software engineering at Brigham Young University in Provo, Utah.
              </p>
              <p class="headline font-weight-black" data-aos="fade-right" v-else>
                Hello! I am a self driven developer and student. I love to get sucked into interesting projects filled with difficult problems that
                require creative solutions. I currently work in a team as a full stack web developer and I am pursuing a degree in Computer Science
                with an emphasis in software engineering at Brigham Young University in Provo, Utah.
              </p>
              {{ $vuetify.breakpoint.name }}
              {{ $vuetify.breakpoint.smAndUp }}
            </v-col>
          </v-row>
          <v-row class="mb-4" justify="center">
            <h1 class="display-1 font-weight-black mb-4" id="special-button-1" @click="$emit('goToExperience')">Experience</h1>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
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
.about-me {
  color: white;
  /* color: #8195A8; */
  background-color: $background-main-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#special-button-1 {
  cursor: pointer;
}
#special-button-1:hover {
  color: $accent-color;
}
</style>
