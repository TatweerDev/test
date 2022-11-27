import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    waypoint1: [
      {
        text: "5",
        icon: "mdi-star",
      },
      {
        text: "Историческая",
      },
      {
        text: "На автобусе",
        icon: "mdi-bus",
      },
      {
        text: "28 марта",
      },
      {
        text: "9 часов",
        icon: "mdi-clock",
      },
    ],
    waypoint2: [
      {
        text: "5",
        icon: "mdi-star",
      },
      {
        text: "Обзрная",
      },
      {
        text: "На автобусе",
        icon: "mdi-bus",
      },
      {
        text: "25 марта",
      },
      {
        text: "6 часов",
        icon: "mdi-clock",
      },
    ],
    waypoint3: [
      {
        text: "5",
        icon: "mdi-star",
      },
      {
        text: "Обзрная",
      },
      {
        text: "На автобусе",
        icon: "mdi-bus",
      },
      {
        text: "25 марта",
      },
      {
        text: "6 часов",
        icon: "mdi-clock",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
