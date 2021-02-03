<template>
  <div>
    <h1>{{count}}</h1>
    <button @click="count++">Click me</button>
    <button @click="count-=10;perSecond++" :disabled="count<10">Upgrade</button>
  </div>
</template>

<script>
export default {
  name: "Clicker",
  created(){
    this.interval = setInterval(()=> {
      this.count+=this.perSecond;
    }, 1000);
  },
  data(){
    return {
      count: 0,
      interval: null,
      perSecond: 0,
    }
  }
}
</script>

<style scoped>

</style>