export default {
  namespaced: true,

  state() {
    return {
      dishes: [],
    };
  },

  mutations: {
    // state меняется через mutations
    // после получения данных в actions, state меняем здесь
    updateMenu(state, dishes) {
      state.dishes = dishes;
    },
  },

  actions: {
    async fetchMenu(ctx) {
      // const res = await fetch("https://deliapi.ru/api/product");
      const res = await fetch("https://75c818a8411c0672.mokky.dev/menu");

      const data = await res.json();

      //   ctx - это контекст, в него передаем mutations и полученные данные
      ctx.commit("updateMenu", data);
      // console.log(data);
    },
  },

  getters: {
    // функция возвращает массив меню
    allMenu(state) {
      return state.dishes;
    },
  },
};
