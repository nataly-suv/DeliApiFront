// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

import { createStore } from "vuex";

import productsModule from "./modules/productsModule.js";
import categoriesModule from "./modules/categoriesModule.js";
import cartModule from "./modules/cartModule.js";

const store = createStore({
  state: {
    // здесь хранятся данные
  },
  mutations: {
    // здесь мутации
  },
  actions: {
    // здесь действия
  },
  getters: {
    // здесь геттеры
  },
  modules: {
    // здесь модули
    productsModule: productsModule,
    categoriesModule: categoriesModule,
    cartModule: cartModule,
  },
});

export default store;

// export default new Vuex.Store({
//   state: {
//     // здесь хранятся данные
//   },
//   mutations: {
//     // здесь мутации
//   },
//   actions: {
//     // здесь действия
//   },
//   getters: {
//     // здесь геттеры
//   },
//   modules: {
//     // здесь модули
//     menu,
//   },
// });
