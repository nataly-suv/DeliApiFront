<!-- ModalWindowComp.vue -->

<template>
  <div class="products__item">
    <img class="item__img" :src="item_data.imgUrl" alt="product__item" />
    <!-- <img class="item__img" src="../assets/images/test.jpg" alt="test" /> -->
    <div class="item__desc">
      <!-- имя -->
      <h1 class="item__name">{{ item_data.name }}</h1>
      <div class="item__bottom">
        <!-- информация о стоимости -->
        <div class="item__priceInfo">
          <p class="item__price">{{ item_data.price }} руб.</p>
        </div>
        <!-- кнопки увеличить или уменьшить, если товар добавлен в корзину -->
        <div v-if="quantityInCart > 0" class="item__btnBox">
          <div class="quantity__items">
            <button
              class="quantity__btn"
              @click="decrementQuantity(item_data.id)"
            >
              &minus;
            </button>
            <p class="quantity__num">{{ quantityInCart }}</p>
            <button
              class="quantity__btn"
              @click="incrementQuantity(item_data.id)"
            >
              +
            </button>
          </div>
        </div>
        <!-- кнопка добавить товар, если товара в корзине нет -->
        <div v-else class="item__btnBox">
          <button class="item__btn" @click="addToCartOn">В корзину</button>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- Скрипт -->
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "ProductsItemComp",
  components: {},
  props: {
    item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  data() {
    return {};
  },

  methods: {
    ...mapActions("cartModule", ["incrementQuantity", "decrementQuantity"]),

    addToCartOn() {
      this.$store.dispatch("cartModule/addToCart", this.item_data);
      // console.log(this.item_data);
      // console.log(this.cartGetters);
    },
  },

  computed: {
    ...mapGetters("cartModule", ["cartGetters"]),

    // Получаем количество этого товара в корзине из Vuex
    quantityInCart() {
      const quantity = this.cartGetters.find((i) => i.id === this.item_data.id);
      return quantity ? quantity.quantity : 0;
    },
  },

};
</script>

<!-- стили -->
<style scoped>

</style>
