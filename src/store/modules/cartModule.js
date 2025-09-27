export default {
  namespaced: true,

  state() {
    return {
      cart: [],
      address: [],
      // merged: [],
      // temp: {
      //   shopcart_id: 10,
      //   product_id: 1,
      // },
      // получение данных телеграмм
      userData: {
        userID: null,
        username: null,
      },
    };
  },
  mutations: {
    // добавление товара в корзину
    ADD_TO_CART(state, menu_item) {
      const isItemInCart = state.cart.find((i) => i.id === menu_item.id);
      if (isItemInCart) {
        isItemInCart.quantity += 1;
      } else {
        state.cart.push({
          ...menu_item,
          quantity: 1,
        });
      }
    },

    // увеличение количества
    INCREMENT_QUANTITY(state, item_id) {
      const item = state.cart.find((i) => i.id === item_id);
      if (item) {
        item.quantity++;
      }
    },
    // уменьшение количества
    DECREMENT_QUANTITY(state, item_id) {
      const item = state.cart.find((i) => i.id === item_id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        // если количество 1 и уменьшаем, удаляем товар из корзины
        // findIndex - используется для нахождения индекса первого элемента
        // в массиве, который удовлетворяет условию,
        // заданному в функции обратного вызова.
        // Если такой элемент не найден, метод возвращает -1
        const index = state.cart.findIndex((i) => i.id === item_id);
        if (index !== -1) state.cart.splice(index, 1);
      }
    },

    ADDRESS_FORM(state, address) {
      state.address.push(address);
    },

    MERGED_ARRAY(state, merged) {
      state.mergedArray = merged;
    },

    // мутация для получения данных телеграм
    SET_USER_DATA(state, payload) {
      state.userData.userID = payload.userID;
      state.userData.username = payload.username;
    },
  },

  actions: {
    //   async fetchCategories(ctx) {
    //     const res = await fetch("https://75c818a8411c0672.mokky.dev/categories", {
    //       method: "GET",
    //       headers: {
    //         "Accept": "application/json",
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //         // "mode": "no-cors",
    //       },
    //     });
    //     const data = await res.json();

    //     //   ctx - это контекст, в него передаем mutations и полученные данные
    //     ctx.commit("updateCategories", data);
    //   },

    // добавление товара в корзину. State меняем через мутацию ADD_TO_CART
    addToCart({ commit, state }, menu_item) {
      commit("ADD_TO_CART", menu_item);
      // event.stopPropagation();
      console.log(state.cart);
    },

    // увеличение количества
    incrementQuantity({ commit }, item_id) {
      commit("INCREMENT_QUANTITY", item_id);
    },
    // уменьшение количества
    decrementQuantity({ commit }, item_id) {
      commit("DECREMENT_QUANTITY", item_id);
    },

    addressForm({ dispatch, commit }, address) {
      commit("ADDRESS_FORM", address);

      dispatch("sendUserData");
      dispatch("submitOrder");
    },

    async sendUserData({ state }) {
      try {
        const response = await fetch(
          "https://75c818a8411c0672.mokky.dev/userData",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              userID: state.userData.userID,
              username: state.userData.username,
            }),
          }
        );
        if (!response.ok) throw new Error("Ошибка отправки userData");
      } catch (error) {
        console.error("Ошибка отправки userData:", error);
        throw error;
      }
    },

    async submitOrder({ commit, state }) {
      // const merged = [state.cart, state.address];
      // console.log(merged);

      const response = await fetch("https://75c818a8411c0672.mokky.dev/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(state.cart),
      });
    },
  },

  getters: {
    // функция возвращает массив меню
    cartGetters(state) {
      return state.cart;
    },
  },
};

// VueX module
// организация добавления карточки товара в корзину,
// увеличение количества, удаление из корзины.
// Есть компоненты menuItemComp.vue, который отвечает за карточку товара, menuItem.vue,
// который отвечает за отображение всех товаров, CartPage.vue, который отвечает за корзину
