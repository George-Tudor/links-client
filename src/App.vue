<template>
  <div id="app">
    <div class="nav-bar"></div>
    <div id="nav">
      <h1>Link Saver</h1>
    </div>
    <router-view/>
  </div>
</template>

<script>
import fetchClient from './services/fetchClient'

export default {
  name: 'App',
  created () {
    if (window.localStorage.token) {
      fetchClient.get('/me')
        .then(() => this.$router.push({ name: 'links' }))
        .catch(() => this.$router.push({ name: 'login' }))
    } else {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
