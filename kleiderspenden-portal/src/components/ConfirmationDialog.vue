<template>
  <section class="section">
    <div class="container">
      <h1 class="title">Bestätigung</h1>
      <ul v-if="clothingType!=null">
        <p>Ihre Spende wurde erfolgreich registriert.</p>
        <li><strong>Art der Kleidung:</strong> {{ clothingType }}</li>
        <li><strong>Krisengebiet:</strong> {{ crisisRegion }}</li>
        <li><strong>Übergabemethode:</strong> {{ deliveryMethod }}</li>
        <li v-if="deliveryMethod === 'Abholung'">
          <ul>
            <li><strong>Postleitzahl:</strong> {{ pickupPostcode }}</li>
            <li><strong>Stadt:</strong> {{ pickupCity }}</li>
            <li><strong>Straße:</strong> {{ pickupStreet }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ConfirmationDialog',
  data() {
    return {
      clothingType: '',
      crisisRegion: '',
      deliveryMethod: '',
      pickupPostcode: '',
      pickupCity: '',
      pickupStreet: ''
    };
  },
  mounted() {
    this.clothingType = this.$route.query.clothingType;
    this.crisisRegion = this.$route.query.crisisRegion;
    this.deliveryMethod = this.$route.query.deliveryMethod;
    this.pickupPostcode = this.$route.query.pickupPostcode;
    this.pickupCity = this.$route.query.pickupCity;
    this.pickupStreet = this.$route.query.pickupStreet;
  }
};
</script>

<style scoped>
</style>

