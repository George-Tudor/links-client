<template>
  <div></div>
</template>

<script>
export default {
  name: 'Landing',
  created () {
    if (window.localStorage.token) {
      this.$router.push({ name: 'Links' })
    } else {
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>

<style scoped>

</style>
