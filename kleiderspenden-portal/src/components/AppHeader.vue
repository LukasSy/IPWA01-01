<template>
  <nav aria-label="navigation" class="navbar custom-navbar" role="navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img alt="Logo" src="../assets/logo.png" style="max-height: 2.5rem;">
      </router-link>

      <a aria-expanded="false" aria-label="menu" class="navbar-burger" role="button" @click="toggleMenu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div :class="{ 'navbar-menu': true, 'is-active': menuActive }">
      <div class="navbar-start">
        <router-link class="navbar-item font-link" to="/register">SPENDEN</router-link>
        <router-link class="navbar-item font-link" to="/FooterSection">RECHTLICHES</router-link>
        <router-link class="navbar-item font-link" to="/ContactPage">KONTAKT</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      menuActive: false
    };
  },
  methods: {
    toggleMenu() {
      this.menuActive = !this.menuActive;
    }
  }
};
</script>

<style scoped>

.navbar {
  margin-bottom: 1.5rem;
}

.custom-navbar {
  background-color: #567388;
}

.navbar-burger {
  color: #fff
}

.font-link {
  font-size: 1.25rem;
}

</style>
