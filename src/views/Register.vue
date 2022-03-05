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
  name: 'register',
  data: () => ({
    credentials: {
      username: '',
      password: ''
    }
  }),
  methods: {
    async register () {
      await fetchClient.postUnauthenticated('/register', this.credentials)
      this.$router.push({ name: 'login' })
    }

  }
}
</script>
