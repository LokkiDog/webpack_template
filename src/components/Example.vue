<template>
  <section>
    <h1>Vue Example component: {{ message }}</h1>
    <img src="/assets/img/1.jpg" alt="Dog">
  </section>
</template>
<script>
export default {
  data () {
    return {
      message: null
    }
  },
  created () {
    this.message = this.$store.getters.getMessage
  }
}
</script>
<style lang="scss" scoped>
  h1{
    color: black
  }
</style>
