<template>
  <div id="app">
    <game-board></game-board>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeCreate() {
    document
      .querySelector("body")
      .setAttribute("style", "background:slategray");
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  text-align: center;
  color: white;
  margin-top: 60px;
}
</style>
