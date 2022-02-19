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
    <fieldset v-for="link in links" :key="link.id">
      <div v-text="link.title"></div>
      <img v-bind:src="link.imageUrl" alt="">
      <div v-text="link.description"></div>
      <div>
        <a :href="link.url" target="_blank">Click to Open</a>
      </div>
      <button type="button" @click="deleteLink(link)">Delete</button>
    </fieldset>
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
