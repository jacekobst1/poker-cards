<template>
  <v-app>
    <v-main>
      <deck />
    </v-main>
  </v-app>
</template>

<script>
    import Deck from '@/views/Deck';

    export default {
      name: 'App',
      components: {
        Deck,
      },
    };
</script>
