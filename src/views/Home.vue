<template>
  <div class="home">
    <div class="canvas">
      <div class="title">
        <div class="title-words" data-aos="fade-right">
          <h1 class="display-2 mb-4">Hi, I'm Wyatt LeFevre.</h1>
          <h2 class="display-1 mb-5">I design and write software, and I love what I do.</h2>
        </div>
        <!-- <v-row justify="center" class="mb-6">
          <v-card height="300px" width="300px">
            <v-container>
              <v-row>
                <v-col>
                  <v-img contain height="95%" src="@/assets/images/portrait.jpg"></v-img>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-row> -->
        <v-btn class="down-arrow" icon @click="goToAbout"><v-icon color="black" size="3.5em">mdi-chevron-down</v-icon></v-btn>
      </div>
    </div>
    <div class="colors">
      <div class="color" style="background-color: #B5CAD2">#B5CAD2</div>
      <div class="color" style="background-color: #9BB6C2">#9BB6C2</div>
      <div class="color" style="background-color: #DCE3E4">#DCE3E4</div>
      <div class="color" style="background-color: #6C8892">#6C8892</div>
      <div class="color" style="background-color: #ACB3B8">#ACB3B8</div>
    </div>
    <div id="about-me">
      <v-container ma-0 pa-0 fluid>
        <v-row align="center" justify="center">
          <v-col cols="8">
            <v-row justify="center">
              <v-col>
                <p class="display-1" data-aos="fade-right">
                  Hello! I am a self driven developer and student. I love to get sucked into interesting projects filled with difficult problems that
                  require creative solutions. I currently work in a team as a full stack web developer and I am pursuing a degree in Computer Science
                  with an emphasis in software engineering at Brigham Young University in Provo, Utah.
                </p>
              </v-col>
            </v-row>
            <v-row class="mt-4" justify="center">
              <v-btn depressed color="black" class="white--text" @click="goToExperience">Experience</v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="experience">
      <h1>Experience</h1>
      <h1>Education</h1>
      <h1>Experience</h1>
      <h1>Skills</h1>
      <v-container>
        <v-row justify="center" style="background-color: white">
          <v-col cols="10">
            <div id="experience-education" class="mb-12">
              <v-row justify="center">
                <span class="display-3 mb-4">Experience and Education</span>
              </v-row>
              <v-row class="display-1 mb-2">
                <span>Brigham Young University, Provo, UT</span>
                <v-spacer></v-spacer>
                <span>Current Student</span>
              </v-row>
              <v-row class="headline">
                Bachelor of Computer Science: Software Engineering, Expected Graduation April 2022
              </v-row>
            </div>
            <div id="experience-experience">
              <v-row>
                <span class="display-2 mb-2">Developer</span>
              </v-row>
              <v-row class="headline mb-2">
                <span>BRIGHAM YOUNG UNIVERSITY, Provo, UT</span>
                <v-spacer></v-spacer>
                <span>Current Student</span>
              </v-row>
              <v-row class="headline">
                Bachelor of Computer Science: Software Engineering, Expected Graduation April 2022
              </v-row>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="skills">
      <v-row>
        <v-col>
          
        </v-col>
      </v-row>
    </div>
    <div class="projects">
      <h1>this is where I will list my projects</h1>
    </div>
    <div class="contact-me">
      <h1>this is where I will list my contact info</h1>
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
      showAbout: false,
      projects: [
        {
          name: 'Project 1',
          description: 'Description 1',
          imagePath: '@/assets/images/project1.jpg',
        },
      ],
      skills: [
        {
          name: 'html',
          iconSrc: '',
        },
        {
          name: 'css',
          iconSrc: '',
        },
      ]
    };
  },
  mounted() {},

  methods: {
    goToAbout() {
      console.log('hey');
      this.$vuetify.goTo('#about-me');
      this.showAbout = true;
    },
    goToExperience() {
      console.log('heys');
      this.$vuetify.goTo('#experience');
    },
  },
};
</script>

<style scoped>
/* 
#B5CAD2
#9BB6C2
#DCE3E4
#6C8892
#ACB3B8 
*/

#about-me {
  color: black;
  /* color: #8195A8; */
  background-color: #dce3e4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#experience {
  min-height: 100vh;
}
.skills {
  min-height: 100vh;
  background-color: #ACB3B8;
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
@media screen and (min-width: 1550px) {
  .canvas {
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

.title-words {
  /* text-shadow: 5px 5px 15px rgb(141, 141, 141); */
}

.title h1 {
  /* font-size: 3em;
  line-height: 1em;
  margin-bottom: 20px; */
}
</style>
