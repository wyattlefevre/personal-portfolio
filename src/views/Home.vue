<template>
  <div class="home">
    <nav-bar :windowHeight="windowHeight"/>

    <landing-banner @goToAbout="goToAbout"/>

    <about-me @goToExperience="goToExperience"/>

    <my-experience :experiences="experiences"/>
    

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
      <arrow-button color="#FFF" @button-clicked="goToProjects"> </arrow-button>
    </div>
    <div class="projects pa-12">
      <h1 class="display-4 text-center font-weight-black pb-12 pt-12">Projects & Portfolio</h1>
      <display-cards :items="projects" cols="6"></display-cards>
      <arrow-button class="pa-12" color="#FFF" @button-clicked="goToContact"> </arrow-button>
    </div>
    <div class="contact-me white--text">
      <v-container style="height: 100vh;">
        <v-row align="center" justify="center" class="fill-height">
          <v-col>
            <v-row align="center" justify="center" class="mb-4">
              <div class="text-h3">
                Interested in working together?
              </div>
            </v-row>
            <v-row align="center" justify="center" class="mb-5">
              <div>
                <v-btn large class="text-h5 font-weight-bold">Get In Touch</v-btn>
              </div>
            </v-row>
            <v-row align="center" justify="center">
              <v-btn icon class="mr-3 ml-3">
                <v-icon x-large color="white">mdi-github</v-icon>
              </v-btn>

              <v-btn icon class="mr-3 ml-3">
                <v-icon x-large color="white">mdi-linkedin</v-icon>
              </v-btn>

              <v-btn icon class="mr-3 ml-3">
                <v-icon x-large color="white">mdi-email</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
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
import ArrowButton from '@/components/ArrowButton';
import DisplayCards from '@/components/DisplayCards';
import Navbar from '@/components/Navbar';
import LandingBanner from '@/components/LandingBanner';
import AboutMe from '@/components/AboutMe';
import MyExperience from '@/components/MyExperience';

export default {
  name: 'Home',
  mixins: [vueWindowSizeMixin],
  components: {
    'arrow-button': ArrowButton,
    'display-cards': DisplayCards,
    'nav-bar' : Navbar,
    'landing-banner' : LandingBanner,
    'about-me' : AboutMe,
    'my-experience' : MyExperience,
  },
  data() {
    return {
      projects: [
        {
          name: 'Photo Site',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-left',
          color: '#bb86fc',
        },
        {
          name: 'Bug Tracker',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-up',
          color: 'red',
        },
        {
          name: 'To Do List',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-up',
          color: 'purple',
        },
        {
          name: 'Time Tracker',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-left',
          color: 'yellow',
        },
        {
          name: 'Your Mom',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-left',
          color: 'yellow',
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
  watch: {
    group() {
      this.drawer = false;
    },
  },
  methods: {
    goToAbout() {
      this.$vuetify.goTo('.about-me');
      this.drawer = false;
    },
    goToExperience() {
      this.$vuetify.goTo('.my-experience');
      this.drawer = false;
    },
    goToSkills() {
      this.$vuetify.goTo('.skills');
      this.drawer = false;
    },
    goToProjects() {
      this.$vuetify.goTo('.projects');
      this.drawer = false;
      console.log('register');
    },
    goToContact() {
      this.$vuetify.goTo('.contact-me');
      this.drawer = false;
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
</style>
