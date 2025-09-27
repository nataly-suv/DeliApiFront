<template>
  <div class="products__item">
    <img
      class="item__img"
      :src="item_data.imgUrl"
      alt="product__item"
      @click="openModal"
    />
    <!-- <img class="item__img" src="../assets/images/test.jpg" alt="test" /> -->

    <!-- описание товара  -->
    <div class="item__desc">
      <!-- имя -->
      <h1 class="item__name" @click="openModal">{{ item_data.name }}</h1>

      <!-- Блок с ценой и кнопкой -->
      <div class="item__bottom">
        <!-- информация о стоимости -->
        <div class="item__priceInfo">
          <p class="item__price">{{ item_data.price }} руб.</p>
        </div>

        <!-- ДОБАВЛЕНИЕ В КОРЗИНУ ИЛИ УВЕЛИЧЕНИЕ КОЛИЧЕСТВА -->
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
        <!-- окончание добавления корзины -->
      </div>
      <!-- окончание блока цены и кнопки -->
    </div>
    <!-- окончание описания товара -->
  </div>

  <!-- модальное окно -->
  <Teleport to="body">
    <div v-if="isModalVisible" class="modalWindow">
      <div class="modal" @click.self="closeModal">
        <div class="modal__close_box">
          <img
            src="../assets/images/close.png"
            @click="closeModal"
            class="modal__close"
            alt="close"
          />
        </div>
        <img class="modal__img" src="../assets/images/test.jpg" alt="test" />
        <p class="modal__name">{{ item_data.name }}</p>
        <p class="modal__description">
          <span class="modal__description_title">Состав:</span>
          {{ item_data.description }}
        </p>
        <p class="modal__price">
          <span class="modal__price_num">{{ item_data.price }} руб.</span>
        </p>
      </div>
    </div>
  </Teleport>
  <!-- окончание модального окна -->
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
    return {
      isModalVisible: false,
    };
  },

  methods: {
    ...mapActions("cartModule", ["incrementQuantity", "decrementQuantity"]),

    addToCartOn() {
      this.$store.dispatch("cartModule/addToCart", this.item_data);
      // console.log(this.item_data);
      // console.log(this.cartGetters);
    },

    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
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
.products__item {
  height: 100%;
  box-sizing: border-box;
  border-radius: 10px;
  border: 0 solid;
  box-shadow: 0px 0px 18px rgb(224, 224, 224);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 20px;
}

.products__item:hover {
  box-shadow: 0px 0px 18px rgb(163, 163, 163);
}

.item__img {
  width: 100%;
}

.item__desc {
  flex-grow: 1;
  width: 92%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 10px;
}

.item__name {
  font-size: 16px;
  font-weight: 600;
}

.item__bottom {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  gap: 30px;
  padding-bottom: 20px;
}

.item__price {
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: #68904d;
}

.item__btnBox {
  width: 100%;
  display: flex;
  justify-content: center;
}

.quantity__items {
  width: 80%;
  padding: 8px 30px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
  border: none;
  border-radius: 10px;
  background: #68904d;
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
  color: white;
}

.quantity__num {
  font-size: 16px;
  font-weight: 500;
  color: white;
}

.item__btn {
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 8px 10px;
  box-sizing: border-box;
  background: #68904d;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 16px;
  font-weight: 500;
}

@media (max-width: 500px) {
  .item__name {
    font-size: 14px;
    font-weight: 400;
  }

  .item__price {
    font-size: 14px;
    font-weight: 500;
  }

  .quantity__items {
    padding: 5px 10px;
  }

  .quantity__num {
    font-size: 14px;
    font-weight: 600;
  }

  .item__btn {
    padding: 7px 10px;
    font-size: 14px;
    font-weight: 500;
  }
}

/*  */
/* модальное окно */
.modalWindow {
  z-index: 888;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(56, 55, 63, 0.7);
}

.modal {
  background: white;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;

  overflow-y: auto;
  scrollbar-color: #68904d rgba(234, 234, 235, 0.7);
  scrollbar-width: thin; /* толщина */

  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 500px;
  /* margin-left: -150px; */
  /* height: 300px; */
  transform: translate(-50%, -20%);

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 620px) {
    width: 450px;
  }

  @media (max-width: 520px) {
    top: 30%;
    width: 370px;
    max-height: 70vh;
  }

  @media (max-width: 420px) {
    width: 300px;
    max-height: 70vh;
  }
  @media (max-width: 320px) {
    width: 220px;
    max-height: 70vh;
  }
}

.modal__close_box {
  display: flex;
  flex-direction: row;
  justify-content: end;
}

.modal__close {
  width: 20px;
}

.modal__close:hover {
  transform: rotate(90deg);
  transition: 1s;
  /* transform-origin: center center; */
}

.modal__img {
  width: 100%;
}

.modal__name {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
}

.modal__description,
.modal__price {
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  margin-bottom: 20px;
}

.modal__description_title {
  font-size: 18px;
  font-weight: 700;
}

.modal__price_num {
  font-size: 18px;
  font-weight: 700;
  color: #68904d;
}

@media (max-width: 420px) {
  .modal__name {
    font-size: 16px;
  }

  .modal__description,
  .modal__price {
    font-size: 14px;
  }

  .modal__price_num {
    font-size: 16px;
  }
}
</style>
