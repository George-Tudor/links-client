<template>
  <div class="about">
    <input type="text" v-model="credentials.username"/>
    <input type="password" v-model="credentials.password"/>
    <button @click="login">Login</button>
  </div>
</template>

<script>
import fetchClient from '../services/fetchClient'
export default {
  name: 'About',
  data: () => ({
    credentials: {
      username: '',
      password: ''
    }
  }),
  methods: {
    async login () {
      const response = await fetchClient.login('http://localhost:8080/authenticate', this.credentials)
      window.localStorage.token = response.token
    }
  }
}
</script>
