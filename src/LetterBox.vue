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
  font-size: 2vh;
  align-items: center;
  border: solid 2px black;
  margin: 1vh;
  height: 4vh;
  width: 4vh;
}

.inWord {
  background-color: rgba(255, 255, 0, 0.75);
}
.correct {
  background-color: rgba(0, 200, 0, 0.75);
}
</style>
