<template>
  <div class="py-7 container-overflow">
    <h1 class="text-center">Prodotti</h1>
    <v-container class="mt-2">
      <!--Olio-->
      <v-row class="px-8 py-4" justify="center" align="center">
        <v-col cols="12" sm="5">
          <v-img
            contain
            class="mx-auto"
            :src="require('../assets/ulivi.jpg')"
            :width="isMobile ? '100vw' : '25vw'"
            :heigth="isMobile ? '100vh' : '25vh'"
          />
        </v-col>
        <v-col cols="12" sm="7">
          <h2 class="mb-2">
            <v-img
              content
              :src="require('../assets/bio.png')"
              class="icon-bio"
              heigth="6%"
              width="6%"
            />
            <span class="product-title">Olio Extra Vergine di Oliva</span>
          </h2>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </p>
          <p>
            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
            tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
            voluptates rem at neque quos facere sequi unde optio aliquam!
          </p>
        </v-col></v-row
      >

      <!--Arance-->
      <v-row class="px-8 py-4" justify="center" align="center">
        <v-col cols="12" sm="5">
          <v-img
            contain
            class="mx-auto"
            :src="require('../assets/arance.jpeg')"
            :width="isMobile ? '100vw' : '25vw'"
            :heigth="isMobile ? '100vh' : '25vh'"
          />
        </v-col>
        <v-col cols="12" sm="7">
          <h2 class="mb-2">
            <v-img
              content
              :src="require('../assets/bio.png')"
              class="icon-bio"
              heigth="6%"
              width="6%"
            />
            <span class="product-title">Arance del Gargano</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </p>
          <p>
            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
            tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
            voluptates rem at neque quos facere sequi unde optio aliquam!
          </p>
        </v-col>
      </v-row>

      <!--Limoni-->
      <v-row class="px-8 py-4" justify="center" align="center">
        <v-col cols="12" sm="5">
          <v-img
            contain
            class="mx-auto"
            :src="require('../assets/limoni.jpeg')"
            :width="isMobile ? '100vw' : '25vw'"
            :heigth="isMobile ? '100vh' : '25vh'"
          />
        </v-col>
        <v-col cols="12" sm="7">
          <h2 class="mb-2">
            <v-img
              content
              :src="require('../assets/bio.png')"
              class="icon-bio"
              heigth="6%"
              width="6%"
            />
            <span class="product-title">Limoni</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta
            minus molestiae vel beatae natus eveniet ratione temporibus aperiam
            harum alias officiis assumenda officia quibusdam deleniti eos
            cupiditate dolore doloribus!
          </p>
          <p>
            Ad dolore dignissimos asperiores dicta facere optio quod commodi nam
            tempore recusandae. Rerum sed nulla eum vero expedita ex delectus
            voluptates rem at neque quos facere sequi unde optio aliquam!
          </p>
        </v-col></v-row
      >
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Products",
  props: {
    isMobile: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
};
</script>
