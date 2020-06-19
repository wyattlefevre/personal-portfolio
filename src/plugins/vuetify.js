import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#DCE3E4',
        secondary: '#8195A8',
        accent: '#bb86fc',
        error: '#8195A8',
        info: '#A8B2BE',
        success: '#66B200',
        warning: '#B3041A',
      },
    },
    dark: false,
  },
});

// Old Lace
// #FCE4D3

// Tan
// #E5C3BB

// Dark Slate Blue
// #466881

// Light Slate Gray
// #8195A8

// Lighter Slate gray
// #A8B2BE
