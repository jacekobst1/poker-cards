<template>
  <div>
    <v-btn
        @click="shuffleDeckMethod()"
        :loading="shuffleDeckLoading"
        x-large
        class="ma-3"
    >
      Przetasuj talię
    </v-btn>
    <v-spacer />
    <v-btn
        @click="drawCardsMethod()"
        :loading="drawCardsLoading"
        x-large
        :class="{'hidden': cardsImages.length >= 5, 'ma-3': true}"
    >
      <span v-if="!cardsImages.length">Wylosuj 3 karty</span>
      <span v-else>Wylosuj kartę</span>
    </v-btn>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name: 'Buttons',
        data: () => ({
           drawCardsLoading: false,
           shuffleDeckLoading: false,
        }),
        computed: {
            ...mapGetters({
                deckId: 'getDeckId',
                cardsImages: 'getDrawnCardsImages'
            }),
        },
        methods: {
            drawCardsMethod() {
                this.drawCardsLoading = true;
                const numberOfCards = this.cardsImages.length ? 1 : 3;
                this.$store.dispatch('drawCards', numberOfCards).then(() => this.drawCardsLoading = false);
            },
            shuffleDeckMethod() {
                this.shuffleDeckLoading = true;
                this.$store.dispatch('shuffleDeck').then(() => this.shuffleDeckLoading = false);
            }
        }
    }
</script>

<style scoped>
    .hidden {
        visibility: hidden;
    }
</style>
