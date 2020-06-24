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
                  href="mailto:wyattlefevre@gmail.com"
                  :color="hover ? 'accent' : 'white'"
                  >Get In Touch</v-btn>
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
              <v-btn
                class="mr-3 ml-3"
                icon
                href="https://www.linkedin.com/in/wyatt-lefevre-a22b261a6/"
              >
                <v-icon x-large :color="hover ? 'accent' : 'white'">mdi-linkedin</v-icon>
              </v-btn>
            </v-hover>
            <v-hover v-slot:default="{ hover }" close-delay="200">
              <v-btn class="mr-3 ml-3" icon href="mailto:wyattlefevre@gmail.com">
                <v-icon x-large :color="hover ? 'accent' : 'white'">mdi-email</v-icon>
              </v-btn>
            </v-hover>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

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
