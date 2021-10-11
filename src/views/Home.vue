<template>
  <v-container class="container-overflow home-image">
    <v-row class="mt-2">
      <v-col cols="12" sm="12">
        <v-img
          contain
          class="mx-auto"
          :src="require('../assets/logo_noImage_1.png')"
          width="35vw"
          heigth="35vh"
        />
      </v-col>
    </v-row>
    <v-row class="home-subtitle text-center">
      <v-col cols="12" sm="12">
        <p>Prodotti da Agricoltura Biologica.</p>
      </v-col>
    </v-row>
    <!--<v-row>
      <v-col cols="12" sm="12" class="home-image">
        <v-img
          contain
          class="mx-auto image-rounded-1"
          :src="require('../assets/giardino.jpg')"
          width="70%"
          heigth="70%"
        />
      </v-col>
    </v-row>-->
  </v-container>
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
