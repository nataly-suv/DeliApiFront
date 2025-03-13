// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

import { createStore } from "vuex";

import menuModule from "./modules/menuModule.js";
import categoriesModule from "./modules/categoriesModule.js";


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
    menuModule: menuModule,
    categoriesModule: categoriesModule,
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
