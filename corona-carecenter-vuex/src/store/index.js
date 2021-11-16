import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    centers: [],
    center: {}
  },
  mutations: {
    SET_CENTERS(state, data) {
      state.centers.push(data);
    },
    CLEAR_CENTERS(state) {
      state.centers = [];
    },
    SET_CENTER(state, data) {
      state.center=data;
    }
  },
  actions: {
    getCenters({ commit }, loc) {
      http
      .get(
        `/15077586/v1/centers?page=1&perPage=10&serviceKey=pK%2B5v%2BJKLaoeG%2FpUU1QVku5WJ7JKwySWiCvRbpo4StK4pBIuKHVrxEuibjXNZGTBVqhZeeoS8fzCbBRy7uCOCg%3D%3D`
      )
        .then((response) => {
          var idx = 0;
          for (const data of response.data.data) {
            if (loc == "전체") {
              commit("SET_CENTERS", data);
              idx++;
            } else if (data.sido == loc) {
              console.log(data);
              commit("SET_CENTERS", data);
              idx++;
            }
            if (idx == 10) break;
          }
        // state.centers = data;
        // console.log(state.centers);
      });
    },
    getDetail({ commit }, id) {
      http
        .get(
          `/15077586/v1/centers?page=1&perPage=10&serviceKey=pK%2B5v%2BJKLaoeG%2FpUU1QVku5WJ7JKwySWiCvRbpo4StK4pBIuKHVrxEuibjXNZGTBVqhZeeoS8fzCbBRy7uCOCg%3D%3D`
        )
        .then((response) => {
          for (const data of response.data.data) {
            if (data.id == id) {
              commit("SET_CENTER", data);
              break;
            }
          }
        });
    }
  },
  modules: {},
});
