<template>
  <h1>Hi! My name is {{name}} and I am {{age}} years old.</h1>
</template>

<script>
export default {
  name: "Example",
  props: {
    name: String,
    age: {
      type: Number,
      default: 100,
      validator(value) {
        return value > 0 && value < 150;
      }
    }
  }
}
</script>

<style scoped>

</style>