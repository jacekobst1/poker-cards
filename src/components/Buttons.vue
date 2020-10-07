<template>
  <div>
    <v-btn x-large @click="fetchNewDeck()">
      Weź nową talię
    </v-btn>
    <v-btn x-large class="ml-10">
      Wylosuj 3 karty
    </v-btn>
  </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        name: 'Buttons',
        methods: {
            ...mapActions(['fetchNewDeck'])
        }
    }
</script>
