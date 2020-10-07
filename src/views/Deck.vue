<template>
  <v-container id="deck-container" fluid>
    <buttons />
    <cards />
  </v-container>
</template>

<script>
    import Buttons from '@/components/Buttons';
    import Cards from '@/components/Cards';

    export default {
        name: 'Deck',
        components: {Buttons, Cards},
        created() {
            this.$store.dispatch('fetchNewDeck');
        }
    }
</script>

<style scoped>
    #deck-container {
        height: 100vh;
        background-image: url('~@/assets/poker.jpg');
        background-size: cover;
        color: white;
    }
</style>
