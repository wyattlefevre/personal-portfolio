<template>
  <v-row justify="center">
    <v-btn icon @click="clicked">
      <v-icon :color="buttonColor" @mouseover="onHover" @mouseout="offHover" size="4.5em">mdi-chevron-down</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: 'ArrowButton',
  props: {
    up: {
      type: Boolean,
      default: false,
    },
    color: String,
    hover: String,
  },
  data() {
    return {
      buttonColor: '',
    };
  },
  created() {
    this.buttonColor = this.color;
  },
  methods: {
    clicked() {
      this.$emit('button-clicked');
    },
    onHover() {
      this.buttonColor = this.hover;
    },
    offHover() {
      this.buttonColor = this.color;
    },
  },
};
</script>

<style lang="scss"></style>
