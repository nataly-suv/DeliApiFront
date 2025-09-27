<template>
  <div class="conteiner">
    <BannerComp />
    <MenuComp />
  </div>
</template>

<!-- Скрипт -->
<script>
import { createLogger } from "vuex/dist/vuex.cjs.js";
import BannerComp from "../components/BannerComp.vue";
import MenuComp from "../components/MenuComp.vue";

export default {
  name: "HomePage",
  components: { BannerComp, MenuComp },

  data() {
    return {};
  },

  methods: {},

  mounted() {
    // Проверяем, что Telegram WebApp API доступен
    if (
      window.Telegram &&
      window.Telegram.WebApp &&
      window.Telegram.WebApp.initDataUnsafe
    ) {
      const user = window.Telegram.WebApp.initDataUnsafe.user;
      if (user) {
        const payload = {
          userID: user.id,
          username: user.username || null,
        };
        this.$store.commit("cartModule/setUserData", payload);
      }
    }
  },
};
</script>

<!-- стили -->
<style scoped></style>

<!-- <template>
      <div>
        <h1>{{ msg }}</h1>
        <div class="card">
          <button type="button" @click="count++">count is {{ count }}</button>
          <p>
            Edit
            <code>components/HelloWorld.vue</code> to test HMR
          </p>
        </div>
        <p>
          Check out
          <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
            >create-vue</a
          >, the official Vue + Vite starter
        </p>
        <p>
          Learn more about IDE Support for Vue in the
          <a
            href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
            target="_blank"
            >Vue Docs Scaling up Guide</a
          >.
        </p>
        <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
      </div>
    </template> -->
