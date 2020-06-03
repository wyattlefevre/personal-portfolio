<template>
  <div class="home">
    <!-- <div style="height: 500px">500px</div> -->
    <div class="canvas">
      <div class="title">
        <v-slide-y-transition>
          <div class="title-words">
            <h1>Hi, I'm Wyatt LeFevre.</h1>
            <h2>Here are some more words about me</h2>
          </div>
        </v-slide-y-transition>
        <v-btn color="primary" @click="goToAbout">About Me</v-btn>
      </div>
    </div>
    <div class="about-me">
      <v-container ma-0 pa-0 fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-row justify="center">
              <v-col>
                <h1>
                  This is some text about me and a description which will be nice to have haha. This is some text about me and a description which
                  will be nice to have. This is some text about me and a description which will be nice to have. This is some text about me and a
                  description which will be nice to have. Yes.
                </h1>
              </v-col>
            </v-row>
            <v-row class="mt-4" justify="center">
              <v-btn @click="goToExperience">Experience</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="experience">
      <h1>this is where I will talk about my experience and education</h1>
    </div>
    <div class="skills">
      <h1>this is where I will talk about my skills</h1>
    </div>
    <div class="projects">
      <h1>this is where I will list my projects</h1>
    </div>
    <div class="contact-me">
      <h1>this is where I will list my contact info</h1>
    </div>

    <!-- <div class="canvas-top">
      <v-parallax id="parallax" dark src="../assets/images/canvas.jpg" :height="windowHeight">

        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1 class="display-1 font-weight-thin mb-4">Vuetify.js</h1>
            <h4 class="subheading">Build your application today!</h4>
          </v-col>
        </v-row>
      </v-parallax>
    </div> -->

    <div class="colors">
      <div class="color" style="background-color: #FCE4D3">Old Lace</div>
      <div class="color" style="background-color: #E5C3BB">Tan</div>
      <div class="color" style="background-color: #466881">Dark Slate Blue</div>
      <div class="color" style="background-color: #8195A8">Light Slate Gray</div>
      <div class="color" style="background-color: #A8B2BE">Lighter Slate gray</div>
    </div>
    <div style="height: 2000px"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { vueWindowSizeMixin } from 'vue-window-size';

export default {
  name: 'Home',
  mixins: [vueWindowSizeMixin],
  data() {
    return {
      projects: [
        {
          name: 'Project 1',
          description: 'Description 1',
          imagePath: '@/assets/images/project1.jpg',
        },
      ],
    };
  },
  methods: {
    goToAbout() {
      console.log('hey');
      this.$vuetify.goTo('.about-me');
    },
    goToExperience() {
      console.log('heys');
      this.$vuetify.goTo('.experience');
    },
  },
};
</script>

<style scoped>
.about-me {
  color: White;
  /* color: #8195A8; */
  background-color: #a8b2be;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.experience {
  min-height: 100vh;
}
.skills {
  min-height: 100vh;
  background-color: green;
}
.projects {
  min-height: 100vh;
  background-color: blue;
}
.contact-me {
  min-height: 100vh;
  background-color: pink;
}
.colors {
  display: flex;
}
.color {
  width: 100px;
  height: 100px;
  color: black;
  text-shadow: 2px 2px 3px white;
}

.canvas {
  background-image: url('../assets/images/canvas.jpg');
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
}

.title {
  color: white;
  position: absolute;
  min-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title-words {
  text-shadow: 5px 5px 15px rgb(141, 141, 141);
  margin-bottom: 20px;
}

.title h1 {
  font-size: 3em;
  line-height: 1em;
  margin-bottom: 20px;
}
</style>
