<template>
  <div class="container-overflow home-image">
    <v-row class="mt-2">
      <v-col cols="12" sm="12">
        <v-img
          contain
          class="mx-auto home-logo"
          :src="require('../assets/logo_noImage_1.png')"
        />
        <div class="home-subtitle text-center">
          Prodotti da Agricoltura Biologica.
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    height: "40%",
    width: "40%",
    images: [
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/limoni.jpeg") },
      { src: require("../assets/arance.jpeg") },
      { src: require("../assets/gargano.jpeg") },
    ],
  }),
};
</script>

<style>
@import "../style/style.css";
</style>
