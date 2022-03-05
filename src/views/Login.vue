<template>
  <div class="about">
    <h3>Sign In</h3>
    <div>
      <div class="mb-2">
        <label for="username" class="p-1">Username:</label>
        <input type="text" name="username" id="username" v-model="credentials.username"/>
      </div>
      <div class="mb-2">
        <label for="password" class="p-1">Password:</label>
        <input type="password" name="password" id="password" v-model="credentials.password"/>
      </div>
    </div>
    <div>
      <button @click="login">Submit</button>
      <div>
        <router-link :to="{ name: 'register' }">Register</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import fetchClient from '../services/fetchClient'

export default {
  name: 'login',
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
      this.$router.push({ name: 'links' })
    }
  }
}
</script>
