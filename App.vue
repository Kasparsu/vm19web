<template>
  <div>
    <example name="Kaspar" :age="155"></example>
    <example :name="name" :age="age"></example>

  </div>
</template>

<script>
import Example from "./Example";
export default {
  name: "App",
  components: {Example},
  data() {
    return {
      age: 10,
      name: "Pets"
    }
  }
}
</script>

<style scoped>

</style>