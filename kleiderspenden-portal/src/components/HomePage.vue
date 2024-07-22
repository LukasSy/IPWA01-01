<template>
  <section class="section moving-gradient">
    <div class="container flex-container">
      <div class="content-container">
        <h1 class="title">Willkommen auf unserem Kleiderspenden-Portal</h1>
        <p class="subtitle">Registrieren Sie hier Ihre Kleiderspenden und wählen Sie aus, in welche Krisenregion Ihre
          Spende gesendet werden soll.</p>
        <p class="content">Unsere Geschäftsstelle in Herford bietet Ihnen sogar die Möglichkeit, Ihre Kleiderspenden
          direkt bei Ihnen zuhause durch unser mobiles Sammelfahrzeug abholen zu lassen.</p>
      </div>
    </div>
  </section>
</template>


<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: 'HomePage',
  components: {AppHeader},
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 1rem;
}

.content-container {
  max-width: 800px;
  padding: 2rem;
  text-align: center;
  border: 2px solid #fff;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

.subtitle, .content {
  margin-top: 1rem;
  color: #fff;
}

.moving-gradient {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, aqua, khaki, crimson, coral);
  background-size: 400% 400%;
  animation: gradientAnimation 20s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 2rem;
  }

  .subtitle, .content {
    font-size: 1rem;
  }

  .content-container {
    padding: 1.5rem;
  }
}
</style>
