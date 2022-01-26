import Vue from "vue";
import App from "./App.vue";
import GameBoard from "./GameBoard.vue";
import Header from "./Header.vue";

Vue.component("game-board", GameBoard);
Vue.component("game-header", Header);

new Vue({
  el: "#app",
  render: h => h(App)
});
