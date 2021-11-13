import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import HeaderNav from "@/components/common/Navi.vue";

Vue.config.productionTip = false;

new Vue({
  components: {
    HeaderNav
  },
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
