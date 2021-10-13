import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    id: 1,
    path: "/",
    name: "Home2",
    component: Home,
  },
  {
    id: 2,
    path: "/products",
    name: "Prodotti",
    component: () => import("../views/Products.vue"),
    props: true,
  },
  {
    id: 3,
    path: "/apartments",
    name: "Residenze",
    component: () => import("../views/Apartments.vue"),
    props: true,
  },
  {
    id: 4,
    path: "/contacts",
    name: "Contatti",
    component: () => import("../views/Contacts.vue"),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
