export default {
  async login (url, payload) {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return await rawResponse.json()
  },
  async post (url, payload) {
    const rawResponse = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer: ${window.localStorage.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    return await rawResponse.json()
  },
  async get (url, query) {
    const rawResponse = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer: ${window.localStorage.token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      query
    })
    return await rawResponse.json()
  }
}
