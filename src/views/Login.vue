<template>
  <div class="about">
    <input type="text" v-model="credentials.username"/>
    <input type="password" v-model="credentials.password"/>
    <button @click="login">Login</button>
    <router-link :to="{ name: 'Register' }">Register</router-link>
  </div>
</template>

<script>
import fetchClient from '../services/fetchClient'
export default {
  name: 'Login',
  data: () => ({
    credentials: {
      username: '',
      password: ''
    }
  }),
  methods: {
    async login () {
      const response = await fetchClient.postUnauthenticated('/authenticate', this.credentials)
      window.localStorage.token = response.token
      this.$router.push({ name: 'Links' })
    }
  }
}
</script>
