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
    <!-- <div class="footer">
      <p>
        Many of the icons i use are from
        <a href="https://icons8.com/">icons8.com</a>
      </p>
    </div> -->
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
          transition: 'fade-right',
          color: '#bb86fc',
        },
        {
          name: 'Bug Tracker',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-right',
          color: 'red',
        },
        {
          name: 'To Do List',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-right',
          color: 'purple',
        },
        {
          name: 'Time Tracker',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-right',
          color: 'yellow',
        },
        {
          name: 'Your Mom',
          description: 'Description 1',
          imgSrc: require('../assets/images/project1.jpg'),
          transition: 'fade-right',
          color: 'yellow',
        },
      ],
      experiences: [
        {
          name: 'Brigham Young University',
          description:
            'I am currently studying computer science at Brigham Young University with an emphasis in Software Engineering. I recently made the <a href="https://www.cpms.byu.edu/wp-content/uploads/2020/06/Deans-List-Poster-Winter-2020.pdf">Dean\'s List</a>.',
          imgSrc: require('../assets/images/BYU.png'),
          transition: 'fade-right',
        },
        {
          name: 'LSIT',
          description: 'I currently work in a team as a full-stack web developer for the IT Department of the College of Life Sciences at BYU.',
          imgSrc: require('../assets/images/LSIT.png'),
          transition: 'fade-right',
        },
        {
          name: 'FHTL',
          description: 'I previously worked as an undergrad research assistant for the Family History Technology Lab at BYU where I worked with other students and professors to create interesting web applications.',
          imgSrc: require('../assets/images/FHTL.png'),
          transition: 'fade-right',
        },
        {
          name: 'Teaching Assistant',
          description: 'I was a TA for the "introduction to object-oriented programming" course at BYU. I helped hundreds of students through their projects in the C++ programming language. I received an average five-star rating from students when surveyed and solidified a strong knowledge of the fundamentals of programming.',
          imgSrc: require('../assets/images/CPMS.png'),
          transition: 'fade-right',
        },
      ],
      skills: [
        //DO NOT USE 'ZOOM' ANIMATIONS IT'LL EFF UP THE STYLING
        {
          name: 'HTML',
          iconSrc: require('../assets/images/icons/html.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'CSS',
          iconSrc: require('../assets/images/icons/css.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'ASP.NET',
          iconSrc: require('../assets/images/icons/aspnet.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'Bootstrap',
          iconSrc: require('../assets/images/icons/bootstrap.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'C++',
          iconSrc: require('../assets/images/icons/c++.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'C#',
          iconSrc: require('../assets/images/icons/csharp.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'Git',
          iconSrc: require('../assets/images/icons/git.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'JavaScript',
          iconSrc: require('../assets/images/icons/javascript.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'MongoDB',
          iconSrc: require('../assets/images/icons/mongodb.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'MySQL',
          iconSrc: require('../assets/images/icons/mysql.png'),
          transition: 'fade-up-right',
        },
        {
          name: 'Vue.js',
          iconSrc: require('../assets/images/icons/vue.png'),
          transition: 'fade-up-left',
        },
        {
          name: 'Vuetify',
          iconSrc: require('../assets/images/icons/vuetify.png'),
          transition: 'fade-up-right',
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
</style>
