<template>
  <div>
    <letter-box
      v-for="(letter, index) in letters"
      :key="index"
      :letter="letter.letter"
      :status="letter.status"
    />
  </div>
</template>

<script>
import LetterBox from "./LetterBox.vue";
export default {
  props: {
    word: {
      type: String,
      required: true,
      default: ""
    },
    answer: {
      type: String,
      required: true,
      default: ""
    },
    submitted: {
      type: Boolean
    }
  },
  data() {
    return {};
  },
  methods: {
    getLetter(index) {
      if (index > this.word.length) {
        return " ";
      } else return this.word[index - 1];
    }
  },
  components: {
    "letter-box": LetterBox
  },
  computed: {
    letters: function() {
      console.log(this.answer);
      let letterArr = [];
      if (this.submitted) {
        for (let i = 0; i < 6; i++) {
          let status = "incorrect";
          if (this.word[i] === this.answer[i]) {
            status = "correct";
          } else if (this.answer.includes(this.word[i])) {
            status = "inWord";
          }
          letterArr.push({
            letter: this.word[i],
            status: status
          });
        }
        console.log(letterArr);
        return letterArr;
      }
      for (let i = 0; i < 6; i++) {
        if (i < this.word.length) {
          letterArr.push({
            letter: this.word[i],
            status: "unsubmitted"
          });
        } else {
          letterArr.push({
            letter: " ",
            status: "unsubmitted"
          });
        }
      }
      return letterArr;
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
:host {
  display: block;
}
:host([invalid]) {
  animation-name: Shake;
  animation-duration: 600ms;
}
.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.win {
  animation-name: Bounce;
  animation-duration: 1000ms;
}
@keyframes Bounce {
  0%,
  20% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(-15px);
  }
  80% {
    transform: translateY(2px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes Shake {
  10%,
  90% {
    transform: translateX(-1px);
  }
  20%,
  80% {
    transform: translateX(2px);
  }
  30%,
  50%,
  70% {
    transform: translateX(-4px);
  }
  40%,
  60% {
    transform: translateX(4px);
  }
}
</style>
