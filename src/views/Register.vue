<template>
  <div class="about">
    <input type="text" v-model="credentials.username"/>
    <input type="password" v-model="credentials.password"/>
    <button @click="register">Register</button>
  </div>
</template>

<script>
import fetchClient from '../services/fetchClient'
export default {
  name: 'Register',
  data: () => ({
    credentials: {
      username: '',
      password: ''
    }
  }),
  methods: {
    async register () {
      await fetchClient.postUnauthenticated('http://localhost:8080/register', this.credentials)
      this.$router.push({ name: 'Login' })
    }

  }
}
</script>
