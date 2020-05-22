<template>
  <div class="home">
    <div class="canvas">
      <div class="title">
        <h1>Hi, I'm Wyatt LeFevre.</h1>
        <h2>Here are some more words about me</h2>
        <v-btn>About Me</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>

<style scoped>
.canvas {
  background-image: url("../assets/images/canvas.jpg");
  background-size: cover;
  position: relative;
  text-align: center;
  margin-bottom: 300px;
  width: 100%;
  height: 100vh;
}

.title {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.title h1 {
  font-size: 3em;
  margin-bottom: 20px;
}
</style>

