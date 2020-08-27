<template>
  <div class="home">
    <nav-bar
      :windowHeight="windowHeight"
      @goToAbout="goToAbout"
      @goToExperience="goToExperience"
      @goToSkills="goToSkills"
      @goToProjects="goToProjects"
      @goToContact="goToContact"
      @email="goToContact(); showEmail=!showEmail;"
    />

    <landing-banner @goToAbout="goToAbout" />

    <about-me @goToExperience="goToExperience" />

    <my-experience @goToSkills="goToSkills" :experiences="experiences" />

    <my-skills @goToProjects="goToProjects" :skills="skills" />

    <my-projects @goToTop="goToTop" @goToContact="goToContact" :projects="projects" />

    <contact-me @hide-email="showEmail = !showEmail" :showEmail="showEmail"/>
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
      showEmail: false,
      projects: [
        {
          name: 'Portfolio Site',
          description: 'This is my personal portfolio website. It is a static web page built using vue and vuetify.',
          demo: 'https://wyattlefevre.com/',
          github: 'https://github.com/wyattlefevre/personal-portfolio',
          imgSrc: require('../assets/images/projects/portfolio-site.png'),
          transition: 'fade-right',
          color: 'black',
          whiteTitle: true,
          whiteDescription: true,
        },
        {
          name: 'Photo Share',
          description:
            'A full stack photo sharing application with users, authentication, file uploads and a clean design. This ap uses vue.js and vuetify on the front end, node.js with express for the api, and mongodb on the back end.',
          demo: 'https://photoshare.wyattlefevre.com/',
          github: 'https://github.com/wyattlefevre/photo-share',
          imgSrc: require('../assets/images/projects/photo-share.png'),
          transition: 'fade-right',
          color: '#1976D2',
          whiteTitle: true,
          whiteDescription: true,
        },
        {
          name: 'Ticket System',
          description:
            'This full stack web application features a clean and simple front end built with vue and vuetify. The back end uses node/express and mongodb.',
          demo: 'https://ticketsystem.wyattlefevre.com/',
          github: 'https://github.com/wyattlefevre/ticket-system',
          imgSrc: require('../assets/images/projects/ticket-system.png'),
          transition: 'fade-right',
          color: '#9a6bb3',
          whiteTitle: true,
          whiteDescription: true,
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
          description:
            'I currently work in a team as a full-stack web developer for the IT Department of the College of Life Sciences at BYU.',
          imgSrc: require('../assets/images/LSIT.png'),
          transition: 'fade-right',
        },
        {
          name: 'FHTL',
          description:
            'I previously worked as an undergrad research assistant for the Family History Technology Lab at BYU where I worked with other students and professors to create interesting web applications.',
          imgSrc: require('../assets/images/FHTL.png'),
          transition: 'fade-right',
        },
        {
          name: 'Teaching Assistant',
          description:
            'I was a TA for the "introduction to object-oriented programming" course at BYU. I helped hundreds of students through their projects in the C++ programming language. I received an average five-star rating from students when surveyed and solidified a strong knowledge of the fundamentals of programming.',
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
    goToTop(){
      this.$vuetify.goTo('.landing-banner');
      this.drawer = false;
    },
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
