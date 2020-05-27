<template>
  <div class="home">
    <div class="canvas">
      <div class="title">
        <div class="title-words">
          <h1>Hi, I'm Wyatt LeFevre.</h1>
          <h2>Here are some more words about me</h2>
        </div>
        <v-btn color="primary">About Me</v-btn>
      </div>
    </div>
    <v-toolbar color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="accent"></v-tabs-slider>
          <v-tab>tab 1</v-tab>
          <v-tab>tab 2</v-tab>
          <v-tab>tab 3</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <div class="colors">
      <div class="color" style="background-color: #FCE4D3">Old Lace</div>
      <div class="color" style="background-color: #E5C3BB">Tan</div>
      <div class="color" style="background-color: #466881">Dark Slate Blue</div>
      <div class="color" style="background-color: #8195A8">Light Slate Gray</div>
      <div class="color" style="background-color: #A8B2BE">Lighter Slate gray</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
};
</script>

<style scoped>
.colors {
  display: flex;
}
.color {
  width: 100px;
  height: 100px;
  color: black;
  text-shadow: 2px 2px 3px white;
}
.canvas {
  background-image: url('../assets/images/canvas.jpg');
  background-size: cover;
  position: relative;
  text-align: center;
  width: 100%;
  height: 100vh;
}

.title {
  color: white;
  position: absolute;
  min-width: 400px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title-words {
  text-shadow: 5px 5px 15px rgb(141, 141, 141);
  margin-bottom: 20px;
}

.title h1 {
  font-size: 3em;
  line-height: 1em;
  margin-bottom: 20px;
}
</style>
