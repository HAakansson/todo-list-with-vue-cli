<template>
  <div id="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
* {
  box-sizing: border-box;
}

body {
  background-image: url("https://overmental.com/wp-content/uploads/2015/05/Coruscant.jpg");
  background-size: cover;
  font-family: Russo One;
  padding: 0;
  margin: 0;
}

.submit {
  background: black;
  border: 1px solid yellow;
  border-radius: 5px;
  color: yellow;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 4px 1rem;
}

.submit:hover {
  background: gray;
}

.submit:focus {
  outline: none;
}
</style>
