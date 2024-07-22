<template>
  <div id="app">
    <Header/>
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/AppHeader.vue'
import Footer from './components/FooterSection.vue'
import Register from './components/RegistrationForm.vue'
import Confirmation from "@/components/ConfirmationDialog.vue";
import ContactPage from "@/components/ContactPage.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Register,
    Confirmation,
    ContactPage
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";
</style>
