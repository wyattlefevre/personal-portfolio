<template>
  <v-container>
    <v-row>
      <!-- looks good on md and above -->
      <v-col v-for="i in items" :key="i.name" :cols="cols" :data-aos="i.transition">
        <div>
          <v-card class="ma-2" :color="colorAll ? colorAll : i.color" dark>
            <div
              class="d-flex flex-no-wrap justify-space-between align-center pa-8"
              :class="{'flex-column': $vuetify.breakpoint.smAndDown,}"
            >
              <div>
                <v-card-title
                  class="text-h4 text-md-h3 fix"
                  :class="{
                    'justify-center': $vuetify.breakpoint.smAndDown,
                    'text-center': $vuetify.breakpoint.smAndDown,
                  }"
                  v-text="i.name"
                ></v-card-title>
                <v-card-text class="text-subtitle-1 text-md-h5" v-text="i.description"></v-card-text>
              </div>
              <v-avatar color="black" class="ma-4 rounded" size="170" tile style="background-color: white">
                <v-img :src="i.imgSrc"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'DisplayCards',
  //item needs name, description, color, cols, transition, imgSrc
  props: {
    items: Array,
    colorAll: String,
    cols: String,
  },
  data() {
    return {
      tempColor: '#FFF',
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.fix {
  overflow-wrap: anywhere;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
}
</style>
