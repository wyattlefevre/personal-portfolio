<template>
  <div class="home">
    <nav-bar
      :windowHeight="windowHeight"
      @goToAbout="goToAbout"
      @goToExperience="goToExperience"
      @goToSkills="goToSkills"
      @goToProjects="goToProjects"
      @goToContact="goToContact"
    />

    <landing-banner @goToAbout="goToAbout" />

    <about-me @goToExperience="goToExperience" />

    <my-experience @goToSkills="goToSkills" :experiences="experiences" />

    <my-skills @goToProjects="goToProjects" :skills="skills" />

    <my-projects @goToContact="goToContact" :projects="projects" />

    <contact-me />
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
import Navbar from '@/components/Navbar';
import LandingBanner from '@/components/LandingBanner';
import AboutMe from '@/components/AboutMe';
import MyExperience from '@/components/MyExperience';
import MySkills from '@/components/MySkills';
import MyProjects from '@/components/MyProjects';
import ContactMe from '@/components/ContactMe';

export default {
  name: 'Home',
  mixins: [vueWindowSizeMixin],
  components: {
    'nav-bar': Navbar,
    'landing-banner': LandingBanner,
    'about-me': AboutMe,
    'my-experience': MyExperience,
    'my-skills': MySkills,
    'my-projects': MyProjects,
    'contact-me': ContactMe,
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

.icons {
  display: flex;
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
