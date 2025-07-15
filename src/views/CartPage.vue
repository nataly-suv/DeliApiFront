<template>
  <section class="cart">
    <h1 class="title">Корзина</h1>
    <div v-if="cartGetters.length">
      <div class="cart__box" v-if="isFormShow">
        <!-- список товаров -->
        <div v-for="item in cartGetters" :key="item.id" class="box__item">
          <img class="item__img" :src="item.imgUrl" alt="dishes__item" />
          <!-- <img class="item__img" src="../assets/images/test.jpg" alt="test" /> -->
          <div class="item_desc">
            <h2 class="item__name">{{ item.name }}</h2>
            <div class="item__priceInfo">
              <p class="item__price">{{ item.price }} руб.</p>
              <p class="item__weight">за 100 гр.</p>
            </div>
          </div>
          <div class="quantity__box">
            <div class="quantity__items">
              <button class="quantity__btn" @click="decrementQuantity(item.id)">
                &minus;
              </button>
              <p class="quantity__num">{{ item.quantity }}</p>
              <button class="quantity__btn" @click="incrementQuantity(item.id)">
                +
              </button>
            </div>
          </div>
        </div>
        <!-- кнопка  -->
        <button @click="setOrder">Оформить заказ</button>
      </div>
      <!-- адрес -->
      <div class="cart__box" v-if="!isFormShow">
        <form class="form" @submit.prevent="handleSubmit">
          <input
            v-model="fio"
            type="text"
            placeholder="ФИО"
            required
            class="form__input"
          />
          <input
            v-model="phone"
            type="tel"
            placeholder="Телефон"
            required
            class="form__input"
          />
          <input
            v-model="address"
            type="text"
            placeholder="Адрес"
            required
            class="form__input"
          />
          <textarea
            v-model="comment"
            placeholder="Комментарий"
            rows="3"
            class="form__input"
          ></textarea>
          <button type="submit" class="form__btn">Отправить заказ</button>
        </form>
      </div>
    </div>
    <!-- если корзина пуста -->
    <div v-else="!cartGetters.length">Ваша корзина пуста</div>
  </section>
</template>

<!-- Скрипт -->
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartPage",
  components: {},

  data() {
    return {
      isFormShow: true,
      fio: "",
      phone: "",
      address: "",
      comment: "",
    };
  },
  methods: {
    ...mapActions("cartModule", [
      "addressForm",
      "incrementQuantity",
      "decrementQuantity",
    ]),
    setOrder() {
      this.isFormShow = false;
    },

    handleSubmit() {
      const address = {
        fio: this.fio,
        phone: this.phone,
        address: this.address,
        comment: this.comment,
      };

      this.$store.dispatch("cartModule/addressForm", address);

      // Очистка формы после успешной отправки и сохранения
      this.fio = "";
      this.phone = "";
      this.address = "";
      this.comment = "";
      alert("Заказ успешно оформлен!");
    },
  },

  computed: {
    // ...mapGetters("menuModule", ["allMenu"]),
    ...mapGetters("cartModule", ["cartGetters"]),
  },

  // async mounted() {
  //   this.fetchMenu();
  //   // this.$store.dispatch("fetchMenu")
  // },
};
</script>

<!-- стили -->
<style scoped>
.cart {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 1370px) {
    width: 90%;
  }
  @media (max-width: 1130px) {
    width: 90%;
  }
}

.title {
  font-size: 40px;
  font-weight: 700;
  /* color: #202020; */

  padding-top: 20px;
  padding-bottom: 20px;
}

.cart__box {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.box__item {
  display: grid;

  /* grid-template-columns: repeat(3, 30%); */
  grid-template-columns: 15% 60% 25%;
  justify-content: space-between;
  align-items: center;
}

.item__img {
  width: 100%;
}

.quantity__box {
  /* width: auto; */

  display: flex;
  /* flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  background: rgb(224, 224, 224); */
}

.quantity__items {
  width: auto;
  padding: 5px 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;

  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background: rgb(224, 224, 224);
}

.quantity__btn {
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  outline: none;
  cursor: pointer;

  font-size: 18px;
  font-weight: 500;
}

.quantity__num {
  font-size: 16px;
  font-weight: 500;
}

.quantity__items:hover {
  background: #68904d;
  color: white;
}

.quantity__items:hover .quantity__num {
  color: white;
}

.quantity__items:hover .quantity__btn {
  color: white;
}

/* форма с данными заказа */
.form {
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}
.form__input {
  margin-bottom: 16px;
  padding: 8px;
  font-size: 16px;
}

.form__btn {
  padding: 10px 16px;
  font-size: 16px;
  cursor: pointer;
}

/*  */
@media (max-width: 420px) {
}
</style>
