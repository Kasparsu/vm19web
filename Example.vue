<template>
  <div>
    <input type="text" :value="name" @input="changed">
    <h1>Hi! My name is {{reverseName}} and I am {{age}} years old.</h1>
  </div>

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
  },
  methods: {
    changed(e){
      this.$emit('rename', e.target.value);
    }
  },
  computed: {
    reverseName(){
      return this.name.split('').reverse().join('');
    }
  }
}
</script>

<style scoped>

</style>