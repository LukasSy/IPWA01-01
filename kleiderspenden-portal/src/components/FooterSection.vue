<template>
  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <p>
          <strong>Rechtliche Hinweise</strong>
        </p>
        <p>
          Jedes Website-Design, jeder Text, alle Grafiken, jede Auswahl bzw. jedes Layout davon und jede Software sind rechtlich
          geschütztes Eigentum von Kleiderspende e.V. (Copyright © 1998-2024 Kleinerspende.com, ALLE RECHTE VORBEHALTEN). Das Kopieren oder die
          Reproduktion (inklusive des Ausdrucks auf Papier) der gesamten Website bzw. von Teilen dieser Website wird nicht gestattet.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterSection'
}
</script>
<style scoped>
.footer {
  background-color: whitesmoke;
  padding: 1.5rem 0;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  font-size: 0.875rem;
  color: #666;
}

@media screen and (max-width: 768px) {
  .content {
    font-size: 0.75rem;
  }
}
</style>
