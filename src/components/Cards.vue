<template>
  <v-container
      id="cards-container"
      class="d-flex align-center justify-center"
  >
    <v-row class="d-flex align-center justify-center pt-lg-10">
      <v-col
          v-for="(url, key) in cardsImages"
          :key="key"
          cols="4"
          sm="3"
          lg="2"
      >
        <v-img :src="url" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        name: 'Cards',
        computed: {
            ...mapGetters({
                cardsImages: 'getDrawnCardsImages'
            })
        }
    }
</script>

<style scoped>
    #cards-container {
        height: 60vh;
    }
</style>
