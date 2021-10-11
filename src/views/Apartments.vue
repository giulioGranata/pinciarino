<template>
  <div class="py-7 container-overflow">
    <h1 class="text-center">Residenze</h1>
    <v-container>
      <v-row class="px-8 pt-8">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
          minus molestiae vel beatae natus eveniet ratione temporibus aperiam
          harum alias officiis assumenda officia quibusdam deleniti eos
          cupiditate dolore doloribus!
        </p>
      </v-row>
      <v-row class="px-8 pt-4">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in imgList"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Apartements",
  data: () => ({
    imgList: [
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
      { src: require("../assets/ulivi.jpg") },
    ],
  }),
};
</script>
