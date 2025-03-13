<template>
  <div class="dishes__item">
    <img class="item__img" :src="item_data.imgUrl" alt="dishes__item" />
    <h1 class="item__name">{{ item_data.name }}</h1>
    <div class="item__bottom">
      <div class="item__priceInfo">
        <p class="item__price">{{ item_data.price }} руб.</p>
        <p class="item__weight">за 100 гр.</p>
      </div>
      <button class="item__btn">+</button>
    </div>
  </div>
</template>

<!-- Скрипт -->
<script>
export default {
  name: "MenuItemComp",
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

  methods: {},
};
</script>

<!-- стили -->
<style scoped>
.dishes__item {
  min-height: 390px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 10px;
  border: 0 solid;
  box-shadow: 0px 0px 18px rgb(224, 224, 224);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* gap: 30px; */
}

.dishes__item:hover {
  box-shadow: 0px 0px 18px rgb(163, 163, 163);
}

.item__img {
  width: 100%;
}

.item__name {
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.item__bottom {
  padding-top: 40px;

  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.item__priceInfo {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 0px;
}

.item__price {
  font-size: 18px;
  font-weight: 700;
  text-align: left;
  color: #68904d;
}

.item__weight {
  font-size: 12px;
  font-weight: 500;
  text-align: left;
}

.item__btn {
  padding: 5px 10px;
  background: #68904d;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 16px;
  font-weight: 600;
}

@media (max-width: 595px) {
  .dishes__item {
    min-height: 340px;
    /* gap: 30px; */
  }
}

@media (max-width: 500px) {
  .dishes__item {
    min-height: 390px;
    /* gap: 30px; */
  }
}

</style>
