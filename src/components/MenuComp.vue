<template>
  <section class="menu">
    <h1 class="title">Наше меню</h1>
    <!-- навишация категорий -->
    <nav class="category">
      <div v-for="category in allCategories" :key="category.id">
        <button class="category__text">{{ category.name }}</button>
      </div>
    </nav>
    <!-- отображение меню по категориям -->
    <div class="dishes__type">
      <div v-for="category in allCategories" :key="category.id">
        <h2 class="dishes__category">{{ category.name }}</h2>

        <div class="dishes">
          <div v-for="item in filteredByCategories(category.id)" :key="item.id">
            <MenuItemComp :item_data="item" @click="searchIdClick(item.id)" />
          </div>
        </div>
      </div>
    </div>
    <!-- модальное окно -->
    <Teleport to="body">
      <div v-if="open" class="modalWindow">
        <div class="modal">
          <img
            src="../assets/images/close.png"
            @click="open = false"
            class="modal__close"
            alt="close"
          />

          <img :src="searchItem.imgUrl" class="modal__img" alt="searchItem" />
          <p>{{ searchItem.name }}</p>
          <p>Состав: {{ searchItem.description }}</p>
          <p>Стоимость за 100 гр.: {{ searchItem.price }} руб.</p>
        </div>
      </div>
    </Teleport>
    <!--  -->
  </section>
</template>

<!-- Скрипт -->
<script>
import { mapGetters, mapActions } from "vuex";
import MenuItemComp from "./MenuItemComp.vue";
export default {
  name: "MenuComp",
  components: { MenuItemComp },

  data() {
    return {
      open: false,
      idClick: 0,
      searchItem: {},
    };
  },
  methods: {
    ...mapActions("menuModule", ["fetchMenu"]),
    ...mapActions("categoriesModule", ["fetchCategories"]),

    filteredByCategories(id) {
      return this.allMenu.filter((item) => item.category_id === id);
    },

    searchIdClick(id) {
      this.open = true;
      this.idClick = id;
      this.searchItem = this.allMenu.find((item) => item.id === this.idClick);
    },
  },

  computed: {
    ...mapGetters("menuModule", ["allMenu"]),
    ...mapGetters("categoriesModule", ["allCategories"]),
  },

  async mounted() {
    this.fetchMenu();
    // this.$store.dispatch("fetchMenu")
    this.fetchCategories();
  },
};
</script>

<!-- стили -->
<style scoped>
.menu {
  width: 80%;
  margin: 0 auto;
  padding: 30px 0;

  @media (max-width: 1370px) {
    width: 90%;
  }
  @media (max-width: 1130px) {
    width: 96%;
  }
}

.title {
  font-size: 40px;
  font-weight: 700;
  color: #202020;
}

.category {
  padding: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.category__text {
  border: none;
  background: none;
  font-size: 20px;
  font-weight: 500;
  color: #202020;
}

.dishes__type {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 10px;
}

.dishes__category {
  font-size: 30px;
  font-weight: 700;
  color: #202020;
}

.dishes {
  display: grid;
  grid-template-columns: repeat(4, 23%);
  justify-content: space-between;
  grid-row-gap: 30px;

  margin-bottom: 50px;
}

@media (max-width: 930px) {
  .dishes {
    display: grid;
    grid-template-columns: repeat(3, 31%);
  }
}

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

  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 500px;
  /* margin-left: -150px; */
  /* height: 300px; */
  transform: translate(-50%, -20%);
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

@media (max-width: 769px) {
  .dishes {
    display: grid;
    grid-template-columns: repeat(2, 45%);
    justify-content: space-around;
  }
}

@media (max-width: 500px) {
  .dishes {
    display: grid;
    grid-template-columns: repeat(1, 80%);
    justify-content: space-around;
  }
}

@media (max-width: 400px) {
  .dishes {
    display: grid;
    grid-template-columns: repeat(1, 90%);
    justify-content: center;
  }
}
</style>

/* так можно обратиться к геттеру, не используя import {mapGetters} from "vuex"
computed: { // получаем геттерс с массивом меню. Функцию их геттера не вызываем
allMenu() { return this.$store.getters.allMenu; } } */ /* Модель id:int name:str
brand:str price:int mrc:int sex:str description:str new_collection:str
category_id:int discount_id:int created_on:datetime updated_on:datetime sale:int
for_category:str */
