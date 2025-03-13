<template>
  <header class="header">
    <!-- лого -->
    <router-link to="/home">
      <img class="logo" src="../assets/images/logo.png" alt="logo" />
    </router-link>
    <!-- контакты -->
    <div class="contacts">
      <!-- адрес -->
      <div class="adress">
        <p class="text">Парк Победы</p>
        <p class="text">Ворошилова 110Г</p>
      </div>
      <!-- контакты -->
      <div class="adress">
        <a class="text connection" href="tel:+79613017117">+7(961) 301-71-17</a>
        <a class="text connection" href="https://m.vk.com/stolovaya_ot_shefa"
          >@stolovaya_ot_shefa</a
        >
      </div>
    </div>
  </header>
</template>

<!-- Скрипт -->
<script>
export default {
  name: "HeaderComp",
  components: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<!-- стили -->
<style scoped>
.header {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 50px;

  @media (max-width: 1370px) {
    width: 90%;
  }

  @media (max-width: 1130px) {
    width: 96%;
  }
}

.logo {
  width: 100px;
}

.contacts {
  display: flex;
  flex-direction: row;
  gap: 40px;
  justify-content: left;
}

.adress {
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: left;
}

.text {
  /* font-family: "Nunito Sans", serif; */
  font-size: 16px;
  font-weight: 500;
  color: #202020;
}

.connection {
  cursor: pointer;
}

@media (max-width: 600px) {
  .header {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .logo {
    width: 70px;
  }

  .contacts {
    width: 96%;
    justify-content: space-between;
  }
}

@media (max-width: 420px) {
  .header {
    gap: 2px;
  }

  .logo {
    width: 50px;
  }

  .text {
  font-size: 14px;
}
}

</style>
