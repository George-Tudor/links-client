<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <br>
    <label for="link-title">Title: </label>
    <input type="text" id="link-title" name="link-title" v-model="newLink.title">
    <br>
    <label for="link-url">URL: </label>
    <input type="text" id="link-url" name="link-title" v-model="newLink.url">
    <button type="button" @click="addLink">Add Link</button>
    <button type="button" @click="getLinkInfo">Get Link Info</button>
    <div class="card" v-for="link in links" :key="link.id">
      <div class="card-body">
        <h3 v-text="link.title"></h3>
        <img v-bind:src="link.imageUrl" alt="">
        <div v-text="link.description"></div>
        <div>
          <a :href="link.url" target="_blank">Click to Open</a>
        </div>
        <button type="button" class="btn-outline-danger" @click="deleteLink(link)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import fetchClient from '../services/fetchClient'
export default {
  name: 'Links',
  data: () => ({
    newLink: {
      title: '',
      url: '',
      imageUrl: '',
      description: ''
    },
    links: []
  }),
  created () {
    this.getLinks()
  },
  methods: {
    async addLink () {
      await fetchClient.post('/links', this.newLink)
      this.getLinks()
    },
    async getLinks () {
      this.links = await fetchClient.get('/links')
    },
    async deleteLink (link) {
      await fetchClient.delete(`/links/${link.id}`)
      this.getLinks()
    },
    async getLinkInfo () {
      await fetchClient.get('/link-data', this.newLink.url)
    }
  }
}
</script>

<style>
img {
  max-width: 200px;
}
</style>
