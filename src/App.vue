<template>
  <div>
    <HeaderComp />
    <router-view></router-view>
    <FooterComp />
  </div>
</template>

<!-- скрипт -->
<script setup>
import HeaderComp from "./components/HeaderComp.vue";
import FooterComp from "./components/FooterComp.vue";

export default {
  name: "App",
  mounted() {
    const tg = window.Telegram.WebApp;
    const user = tg.initDataUnsafe.user;
    if (user) {
      console.log("User ID:", user.id);
      console.log("Username:", user.username);
      // Записать в Vuex для глобального доступа
      this.$store.dispatch("cartModule/setUserData", {
        userID: user.id,
        username: user.username,
      });
    }
  },
};
</script>

<!-- стили -->
<style scoped>
/* .logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
} */
</style>
