<template>
  <div class="home">
    <div class="canvas">
      <div class="title">
        <div class="title-words ml-2 mr-2" data-aos="fade-right">
          <h1 :class="[$vuetify.breakpoint.smAndUp ? 'display-2 mb-4 text-no-wrap' : 'display-1 mb-4 text-no-wrap']">Hi, I'm Wyatt LeFevre.</h1>
          <h2 :class="[$vuetify.breakpoint.smAndUp ? 'display-1 mb-5' : 'headline mb-5']">I design and write software, and I love what I do.</h2>
        </div>
        <v-btn icon @click="goToAbout">
          <v-icon class="down-arrow" color="black" size="3.5em">mdi-chevron-down</v-icon>
        </v-btn>
      </div>
    </div>
    <!-- <div class="colors">
      <div class="color" style="background-color: #B5CAD2">#B5CAD2</div>
      <div class="color" style="background-color: #9BB6C2">#9BB6C2</div>
      <div class="color" style="background-color: #DCE3E4">#DCE3E4</div>
      <div class="color" style="background-color: #6C8892">#6C8892</div>
      <div class="color" style="background-color: #ACB3B8">#ACB3B8</div>
    </div> -->
    <div id="about-me">
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
              <h1 class="display-1 font-weight-black mb-4" id="special-button-1" @click="goToExperience">Experience</h1>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div id="experience">
      <v-container>
        <v-row dense>
          <v-col v-for="e in experiences" :key="e.name" cols="12" :data-aos="e.transition">
            <div>
              <v-card color="black">
                <div class="d-flex flex-no-wrap justify-space-between pa-8">
                  <div>
                    <v-card-title class="headline white--text" v-text="e.name"></v-card-title>
                    <v-card-subtitle v-text="e.description"></v-card-subtitle>
                  </div>
                  <v-avatar class="ma-4" size="150" tile color="white">
                    <v-img :src="e.imgSrc"></v-img>
                  </v-avatar>
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <div class="skills pa-12">
      <h1 class="display-4 text-center font-weight-black pb-8">Skills</h1>
      <div class="icons">
        <v-row justify="center" align="center">
          <v-col v-for="s in skills" :key="s.name" sm="6" cols="10" md="5" lg="3" class="text-center" :data-aos="s.transition">
            <img :src="s.iconSrc" height="250px" />
            <h1 class="display-1">{{ s.name }}</h1>
          </v-col>
        </v-row>
      </div>
    </div>
    <div class="projects">
      <h1>this is where I will list my projects</h1>
    </div>
    <div class="contact-me">
      <h1>this is where I will list my contact info</h1>
    </div>
    <div class="footer">
      <p>
        Many of the icons i use are from
        <a href="https://icons8.com/">icons8.com</a>
      </p>
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
          imagePath: '../assets/images/project1.jpg',
        },
      ],
      experiences: [
        {
          name: 'Brigham Young University',
          description: 'this is what i did',
          imgSrc: require('../assets/images/BYU.png'),
          transition: 'fade-right',
        },
        {
          name: 'another thing I did',
          description: 'this is what i did hahahaha it was really good',
          imgSrc: '',
          transition: 'fade-right',
        },
        {
          name: 'a thing I did again',
          description: 'this is what i did',
          imgSrc: '',
          transition: 'fade-right',
        },
      ],
      skills: [
        {
          name: 'html',
          iconSrc: require('../assets/images/icons/html.png'),
          transition: 'fade-up',
        },
        {
          name: 'css',
          iconSrc: require('../assets/images/icons/css.png'),
          transition: 'fade-down',
        },
        {
          name: 'asp.net',
          iconSrc: require('../assets/images/icons/aspnet.png'),
          transition: 'fade-right',
        },
        {
          name: 'bootstrap',
          iconSrc: require('../assets/images/icons/bootstrap.png'),
          transition: 'fade-left',
        },
        {
          name: 'C++',
          iconSrc: require('../assets/images/icons/c++.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'C#',
          iconSrc: require('../assets/images/icons/csharp.png'),
          transition: 'fade-down-right',
        },
        {
          name: 'git',
          iconSrc: require('../assets/images/icons/git.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'javascript',
          iconSrc: require('../assets/images/icons/javascript.png'),
          transition: 'fade-down-left',
        },
        {
          name: 'mongodb',
          iconSrc: require('../assets/images/icons/mongodb.png'),
          transition: 'zoom-in-up',
        },
        {
          name: 'mysql',
          iconSrc: require('../assets/images/icons/mysql.png'),
          transition: 'zoom-out-down',
        },
        {
          name: 'vue',
          iconSrc: require('../assets/images/icons/vue.png'),
          transition: 'zoom-in-right',
        },
        {
          name: 'vuetify',
          iconSrc: require('../assets/images/icons/vuetify.png'),
          transition: 'zoom-out-left',
        },
      ],
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
    goToSkills() {
      console.log('heys');
      this.$vuetify.goTo('.skills');
    },
  },
};
</script>

<style lang="scss" scoped>
/* 
#B5CAD2
#9BB6C2
#DCE3E4
#6C8892
#ACB3B8 
*/
$base-color: white;
$base-color-2: #9bb6c2;

.down-arrow:hover {
  color: white;
}
#about-me {
  color: black;
  /* color: #8195A8; */
  background-color: $base-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#experience {
  min-height: 100vh;
}

#special-button-1 {
  cursor: pointer;
}
#special-button-1:hover {
  color: $base-color-2;
}

.skills {
  background-color: black;
  color: white;
  // min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.icons {
  display: flex;
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
  width: 70px;
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
