export default {
  namespaced: true,

  state() {
    return {
      categories: [],
    };
  },
  mutations: {
    // state меняется через mutations
    // после получения данных в actions, state меняем здесь
    updateCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async fetchCategories(ctx) {
      const res = await fetch("https://75c818a8411c0672.mokky.dev/categories", {
        method: "GET",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          // "mode": "no-cors",
        },
      });
      // const res = await fetch("https://deliapi.ru/api/category", {
      //   method: "GET",
      //   headers: {
      //     "Accept": "application/json",
      //     "Content-Type": "application/json",
      //     "Access-Control-Allow-Origin": "*",
      //     // "mode": "no-cors",
      //   },
      // });

      const data = await res.json();

      //   ctx - это контекст, в него передаем mutations и полученные данные
      ctx.commit("updateCategories", data);
    },
  },
  getters: {
    // функция возвращает массив меню
    allCategories(state) {
      return state.categories;
    },
  },
};
