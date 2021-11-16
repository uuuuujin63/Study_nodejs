import Vue from "vue";
import VueRouter from "vue-router";
import CenterList from "../components/center/CenterList.vue";
import CenterView from "../components/center/CenterView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "CenterList",
    component: CenterList, 
  },
  {
    path: "/detail/:id",
    name: "CenterView",
    component: CenterView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
