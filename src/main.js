import Vue from 'vue'
import App from './App.vue'
import GameBoard from './GameBoard.vue'

Vue.component('game-board', GameBoard)

new Vue({
  el: '#app',
  render: h => h(App)
})
