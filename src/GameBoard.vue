<template>
  <div>
    <div v-for="guess in guesses" :key="guess.guessId">
      <game-row
        :word="guess.guess"
        :answer="answer"
        :submitted="guess.submitted"
      ></game-row>
    </div>
  </div>
</template>

<script>
import GameRow from "./GameRow.vue";
export default {
  data() {
    return {
      answer: "HEAVEN",
      currentGuess: 0,
      guesses: [
        {
          guessId: 1,
          guess: "",
          submitted: false
        },
        {
          guessId: 2,
          guess: "",
          submitted: false
        },
        {
          guessId: 3,
          guess: "",
          submitted: false
        },
        {
          guessId: 4,
          guess: "",
          submitted: false
        },
        {
          guessId: 5,
          guess: "",
          submitted: false
        },
        {
          guessId: 6,
          guess: "",
          submitted: false
        },
        {
          guessId: 7,
          guess: "",
          submitted: false
        }
      ]
    };
  },
  created: function() {
    window.addEventListener("keydown", this.keyDown);
  },
  methods: {
    keyDown(e) {
      if (e.key === "Enter") {
        if (this.guesses[this.currentGuess].guess.length < 6) return;
        this.submitGuess();
        return;
      }
      if (e.key === "Backspace") {
        this.guesses[this.currentGuess].guess = this.guesses[
          this.currentGuess
        ].guess.slice(0, -1);
      }
      if (!/^[a-zA-Z]{1}$/.test(e.key)) return;
      if (this.guesses[this.currentGuess].guess.length < 6) {
        this.guesses[this.currentGuess].guess += e.key.toUpperCase();
      }
    },
    submitGuess() {
      this.guesses[this.currentGuess].submitted = true;
      this.currentGuess += 1;
    }
  },
  components: {
    "game-row": GameRow
  }
};
</script>
