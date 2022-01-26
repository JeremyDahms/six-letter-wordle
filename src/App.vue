<template>
  <div id="app">
    <game-header></game-header>
    <game-board></game-board>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#121213");
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: #d7dadc;
  margin-top: 1vh;
}
</style>
