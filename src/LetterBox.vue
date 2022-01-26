<template>
  <div :class="status">
    {{ letter }}
  </div>
</template>

<script>
export default {
  props: {
    letter: {
      type: String
    },
    status: {
      type: String
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  font-weight: bolder;
  font-size: 4vh;
  align-items: center;
  border: solid 2px #3a3a3c;
  margin: 0.35vh;
  height: 10vw;
  width: 10vw;
}
.incorrect {
  background-color: #3a3a3c;
}
.inWord {
  background-color: #b59f3b;
  border: solid 2px #b59f3b;
}
.correct {
  background-color: #538d4e;
  border: solid 2px #538d4e;
}
</style>
