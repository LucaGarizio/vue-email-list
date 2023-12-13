const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
      emails: [],
    };
  },
  methods: {
    pushEmail() {
      // Verifica se l'email è già presente nell'array
      if (!this.emails.includes(this.email)) {
        // Aggiungi l'email all'array una volta
        this.emails.push(this.email);
      }
    },
    // ricevi un random mail da un server esterno
    getEmail() {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
          // quando ho ricevuto risposta dammi solo il valore della stringa email
          this.email = response.data.response;
          // chiama la funzione pushemail per caricare la mail nell'array
          this.pushEmail();
        });
    },
    // dalla mail ricevuta dal server esterno ciclala fino a quando non ne ottieni 10
    createEmails() {
      for (let i = 0; i < 10; i++) {
        this.getEmail();
      }
    }
  },
  mounted() {
    // fai partire la funzione una volta che la pagina è stata caricata
    this.createEmails();
  } 
}).mount('#app');