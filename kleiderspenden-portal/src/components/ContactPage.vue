<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Kontakt</h1>
      <h2 class="subtitle mt-5">Fehlt ein gewünschtes Kriesengebiet oder haben sie Fragen oder Kritik? Schreiben sie
        uns</h2>
      <form @submit.prevent="submitForm">
        <div class="field">
          <label class="label" for="emailInput">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input id="emailInput" v-model="email" class="input" placeholder="Email" required type="email"/>
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label" for="nameInput">Name</label>
          <div class="control has-icons-left">
            <input id="nameInput" v-model="name" class="input" placeholder="Name" required type="text"/>
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label" for="messageInput">Nachricht</label>
          <div class="control">
            <textarea id="messageInput" v-model="message" class="textarea" placeholder="Nachricht" required rows="5"></textarea>
          </div>
        </div>

          <div class="control">
            <button id="submitButton" class="button custom-button" type="submit">Abschicken</button>
          </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      this.$router.push({
        name: 'Confirmation'
      });
      },
  }
};
</script>

<style scoped>
.custom-button {
  background-color: #4b6e96;
  border-color: #4b6e96;
  color: #fff;
}

</style>
