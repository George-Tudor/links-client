<template>
  <div></div>
</template>

<script>
export default {
  name: 'landing',
  created () {
    if (window.localStorage.token) {
      this.$router.push({ name: 'links' })
    } else {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

</style>
