const { createApp } = Vue

createApp({
  data() {
    return {
      emails: [],
      message: 'Hello Vue!'
    }
  },
  methods: {

  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((provide) => {
      this.emails.push(provide.data.response)
      });
    }
  }
}).mount('#app')


