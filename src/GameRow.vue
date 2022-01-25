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
      let letterArr = [];
      if (this.submitted) {
        for (let i = 0; i < 6; i++) {
          let status = "incorrect";
          if (this.answer.includes(this.word[i])) {
            status = "inWord";
          }
          if (this.word[i] === this.answer[i]) {
            status = "correct";
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
  justify-content: space-between;
}
</style>
