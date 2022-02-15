const host = 'http://localhost:8080'

export default {
  async postUnauthenticated (url, payload) {
    const rawResponse = await fetch(host + url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    try {
      return await rawResponse.json()
    } catch (err) {
      return rawResponse
    }
  },
  async post (url, payload) {
    const rawResponse = await fetch(host + url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    try {
      return await rawResponse.json()
    } catch (err) {
      return rawResponse
    }
  },
  async get (url, query) {
    const rawResponse = await fetch(host + url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      query
    })
    try {
      return await rawResponse.json()
    } catch (err) {
      return rawResponse
    }
  },
  async delete (url) {
    const rawResponse = await fetch(host + url, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${window.localStorage.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    try {
      return await rawResponse.json()
    } catch (err) {
      return rawResponse
    }
  }
}
