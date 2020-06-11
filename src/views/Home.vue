<template>
  <div class="home">
    <div class="canvas">
      <div class="title">
        <div class="title-words ml-2 mr-2" data-aos="fade-right">
          <h1 :class="[$vuetify.breakpoint.smAndUp ? 'display-2 mb-4 text-no-wrap' : 'display-1 mb-4 text-no-wrap']">
            Hi, I'm Wyatt LeFevre.
          </h1>
          <h2 :class="[$vuetify.breakpoint.smAndUp ? 'display-1 mb-5' : 'headline mb-5']">
            I design and write software, and I love what I do.
          </h2>
        </div>
        <arrow-button color="#000" :hover="colors.accentColor" @button-clicked="goToAbout"> </arrow-button>
      </div>
    </div>
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
    <div id="experience" style="padding-top: 96px">
      <h1 class="display-4 text-center font-weight-black pb-12 pt-12">Experience</h1>
      <display-cards :items="experiences" colorAll="#1d1d1d" cols="12"></display-cards>
      <arrow-button color="#FFF" :hover="colors.accentColor" @button-clicked="goToSkills"> </arrow-button>
    </div>
    <div class="skills pa-12">
      <h1 class="display-4 text-center font-weight-black pb-12 pt-12">Skills</h1>
      <div class="icons pb-12">
        <v-row justify="center" align="center">
          <v-col v-for="s in skills" :key="s.name" sm="6" cols="10" md="5" lg="3" class="text-center" :data-aos="s.transition">
            <img :src="s.iconSrc" height="200px" />
            <h1 class="display-1">{{ s.name }}</h1>
          </v-col>
        </v-row>
      </div>
      <div class="page-space "></div>
      <arrow-button color="#FFF" :hover="colors.accentColor" @button-clicked="goToProjects"> </arrow-button>
    </div>
    <div class="projects pa-12">
      <h1 class="display-4 text-center font-weight-black pb-12 pt-12">Projects & Portfolio</h1>
      <display-cards :items="projects" cols="6"></display-cards>
      <arrow-button class="pa-12" color="#FFF" :hover="colors.accentColor" @button-clicked="goToContact"> </arrow-button>
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
  </div>
</template>

<script>
// @ is an alias to /src
import { vueWindowSizeMixin } from 'vue-window-size';
import ArrowButton from '../components/ArrowButton';
import DisplayCards from '../components/DisplayCards';

export default {
  name: 'Home',
  mixins: [vueWindowSizeMixin],
  components: {
    'arrow-button': ArrowButton,
    'display-cards': DisplayCards,
  },
  data() {
    return {
      showAbout: false,
      projects: [
        {
          name: 'Project 1',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-left',
          color: '#bb86fc'
        },
        {
          name: 'Project 1',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-up',
          color: 'red'
        },
        {
          name: 'Project 1',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-up',
          color: 'purple'
        },
        {
          name: 'Project 1',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-left',
          color: 'yellow'
        },
      ],
      experiences: [
        {
          name: 'Brigham Young University',
          description:
            'this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did this is what i did',
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
        {
          name: 'the last one',
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
      colors: {
        accentColor: '#bb86fc',
      },
    };
  },
  mounted() {},

  methods: {
    goToAbout() {
      this.$vuetify.goTo('#about-me');
      this.showAbout = true;
    },
    goToExperience() {
      this.$vuetify.goTo('#experience');
    },
    goToSkills() {
      this.$vuetify.goTo('.skills');
    },
    goToProjects() {
      this.$vuetify.goTo('.projects');
    },
    goToContact() {
      this.$vuetify.goTo('.contact-me');
    },
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

.down-arrow:hover {
  background-color: $accent-color;
}
#about-me {
  color: white;
  /* color: #8195A8; */
  background-color: $background-main-color;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#experience {
  min-height: 100vh;
  background-color: $background-main-color;
  color: white;
}

#special-button-1 {
  cursor: pointer;
}
#special-button-1:hover {
  color: $accent-color;
}

.skills {
  background-color: $background-main-color;
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
  color: white;
  min-height: 100vh;
  background-color: $background-main-color;
}
.contact-me {
  min-height: 100vh;
  background-color: $background-secondary-color;
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
