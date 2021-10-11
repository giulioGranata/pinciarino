<template>
  <v-app>
    <v-app-bar app color="secondary">
      <v-app-bar-nav-icon
        v-if="isMobile"
        @click="drawer = true"
        class="d-flex d-sm-none"
        style="color: white !important"
      >
      </v-app-bar-nav-icon>

      <v-tabs v-else centered class="ml-n9" color="grey darken-2">
        <v-tab v-for="link in links" :key="link.id" :to="{ path: link.path }">
          <span class="white-text">{{ link.name }}</span>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item
            v-for="link in links"
            :key="link.id"
            :to="{ path: link.path }"
          >
            <v-list-item-title>
              {{ link.name }}
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-main class="darkolivegreen-1 lighten-2">
      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <v-sheet elevation="20" height="84vh" rounded="lg" class="sheet">
              <transition name="fade">
                <router-view :isMobile="isMobile" />
              </transition>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer padless fixed color="secondary">
      <v-col class="text-center white-text" cols="12">
        {{ new Date().getFullYear() }} —
        <strong>© Società Agricola Il Pinciarino S.r.L.</strong> -
        <i> P.IVA 04073420715</i>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    drawer: false,
    links: [],
  }),
  created() {
    this.$router.options.routes.forEach((route) => {
      this.links.push({
        id: route.id,
        name: route.name,
        path: route.path,
      });
    });
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
};
</script>
