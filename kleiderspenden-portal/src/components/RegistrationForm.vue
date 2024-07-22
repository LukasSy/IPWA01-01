<template>
  <section class="section">
    <div class="container">

      <h1 class="title">Registriere Deine Kleiderspende</h1>
      <form @submit.prevent="submitForm">
        <div class="field">
          <label class="label" for="clothingInput">Art der Kleidung</label>
          <div class="control">
            <input id="clothingInput" v-model="clothingType" class="input" required type="text">
          </div>
        </div>

        <div class="field">
          <label class="label" for="crisisDropDown">Aktuelles Krisengebiet</label>
          <div class="control">
            <div class="select">
              <select id="crisisDropDown" v-model="crisisRegion" required>
                <option disabled selected value="">Bitte auswählen</option>
                <option value="Äthiopien">Äthiopien</option>
                <option value="Aserbaidschan">Aserbaidschan</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Bosnien und Herzegowina">Bosnien und Herzegowina</option>
                <option value="DR Kongo">DR Kongo</option>
                <option value="Iran">Iran</option>
                <option value="Israel">Israel</option>
                <option value="Jemen">Jemen</option>
                <option value="Kenia">Kenia</option>
                <option value="Kolumbien">Kolumbien</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Nordirland">Nordirland</option>
                <option value="Philippinen">Philippinen</option>
                <option value="Ruanda">Ruanda</option>
                <option value="Sudan">Sudan</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Syrien">Syrien</option>
                <option value="Venezuela">Venezuela</option>
              </select></div>
          </div>
        </div>

        <div class="field">
          <label class="label">Übergabemethode</label>
          <div class="control">
            <label class="radio" for="RadioButtonDelivery">
              <input id="RadioButtonDelivery" v-model="deliveryArt" required type="radio" value="Geschäftsstelle">
              Übergabe an der Geschäftsstelle
            </label>
            <label class="radio" for="pickupRadio">
              <input id="pickupRadio" v-model="deliveryArt" required type="radio" value="Abholung">
              Abholung
            </label></div>
        </div>

        <div v-if="deliveryArt === 'Abholung'">
          <div class="field">
            <label class="label" for="zipInput">Postleitzahl</label>
            <div class="control">
              <input id="zipInput" v-model="zipCode" class="input" required type="text">
            </div>
          </div>

          <div class="field">
            <label class="label" for="CityInput">Stadt</label>
            <div class="control">
              <input id="CityInput" v-model="pickupCity" class="input" required type="text">
            </div>
          </div>

          <div class="field">
            <label class="label" for="streetInput ">Straße</label>
            <div class="control">
              <input id="streetInput" v-model="pickupStreet" class="input" required type="text">
            </div>
          </div>
        </div>

        <div class="control mt-5">
          <button class="button custom-button" type="submit">Spende Registrieren</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RegistrationForm',
  data() {
    return {
      clothingType: '',
      crisisRegion: '',
      deliveryArt: '',
      zipCode: '',
      pickupCity: '',
      pickupStreet: ''
    }
  },
  methods: {
    submitForm() {
      if (this.deliveryArt === 'Abholung' && !this.isValid()) {
        alert('Die Abholadresse muss in der Nähe der Geschäftsstelle liegen.');
        return;
      }
      this.$router.push({
        name: 'Confirmation',
        query: {
          clothingType: this.clothingType,
          crisisRegion: this.crisisRegion,
          deliveryMethod: this.deliveryArt,
          pickupPostcode: this.zipCode,
          pickupCity: this.pickupCity,
          pickupStreet: this.pickupStreet
        }
      });
    },
    isValid() {
      return this.zipCode.startsWith("32");
    }
  }
}
</script>
<style scoped>
.custom-button {
  background-color: #355973;
  border-color: #355973;
  color: #fff;
}
</style>
