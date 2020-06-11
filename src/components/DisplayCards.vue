<template>
  <v-container>
    <v-row>
      <v-col v-for="i in items" :key="i.name" :cols="cols" :data-aos="i.transition">
        <div>
          <v-card class="ma-2" :color="colorAll ? colorAll : i.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between align-center pa-8">
              <div>
                <v-card-title class="display-1" v-text="i.name"></v-card-title>
                <v-card-text class="headline" v-text="i.description"></v-card-text>
              </div>
              <v-avatar class="ma-4" size="150" tile>
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

<style lang="scss"></style>
