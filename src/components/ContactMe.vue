<template>
  <div class="contact-me white--text">
    <v-container style="height: 100vh;">
      <v-row align="center" justify="center" class="fill-height">
        <v-col>
          <v-row align="center" justify="center" class="mb-4">
            <div class="text-center text-h4 text-md-h3">
              Interested in working together?
            </div>
          </v-row>
          <v-row align="center" justify="center" class="mb-5">
            <div>
              <v-hover v-slot:default="{ hover }" close-delay="200">
                <v-btn
                  large
                  class="text-h5 font-weight-bold black--text"
                  @click="$emit('hide-email')"
                  :color="hover ? 'accent' : 'white'"
                  >Get In Touch</v-btn
                >
              </v-hover>
            </div>
          </v-row>
          <v-row align="center" justify="center">
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-btn class="mr-3 ml-3" icon href="https://github.com/wyattlefevre">
                <v-icon x-large :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
              </v-btn>
            </v-hover>
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-btn class="mr-3 ml-3" icon href="https://www.linkedin.com/in/wyatt-lefevre-a22b261a6/">
                <v-icon x-large :color="hover ? 'accent' : 'white'">mdi-linkedin</v-icon>
              </v-btn>
            </v-hover>
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-btn @click="$emit('hide-email')" class="mr-3 ml-3" icon>
                <v-icon x-large :color="hover ? 'accent' : 'white'">mdi-email</v-icon>
              </v-btn>
            </v-hover>
          </v-row>
          <v-row class="white--text mt-6" justify="center">
            <v-alert height="4.5em" :value="showEmail"  transition="scale-transition" dense color="dark">
              <v-row dense align="center">
                <v-col class="grow">
                  <v-text-field class="text-h6" dense v-model="email" id="emailAddress"></v-text-field>
                </v-col>
                <v-col class="shrink">
                  <v-btn dark @click="copyEmail">Copy</v-btn>
                </v-col>
              </v-row>
            </v-alert>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: 'ContactMe',
  props: ['showEmail'],
  data() {
    return {
      email: 'wyattlefevre@gmail.com',
    };
  },
  methods: {
    copyEmail() {
      this.email = 'wyattlefevre@gmail.com';
      // window.alert('hey');
      let copyText = document.getElementById('emailAddress');

      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/

      /* Copy the text inside the text field */
      document.execCommand('copy');
      /* Alert the copied text */
      // window.alert('Copied the text: ' + copyText.value);
    },
  },
};
</script>

<style lang="scss" scoped>
$background-main-color: #121212;
$background-secondary-color: #000;
$card-color: #1d1d1d;
$card-color-light: #1f1f1f;
$accent-color: #bb86fc;
.contact-me {
  min-height: 100vh;
  background-color: $background-secondary-color;
}
</style>
