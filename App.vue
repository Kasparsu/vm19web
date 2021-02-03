<template>
  <div>
    <example name="Kaspar" :age="28"></example>
    <example :name="name" :age="age" @rename="changeName"></example>

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
  },
  methods: {
    changeName(newName){
      this.name = newName;
    }
  }
}
</script>

<style scoped>

</style>