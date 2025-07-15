<template>
  <header class="footer">
    <router-link to="/admin">
      <p class="text">админка</p>
    </router-link>
  </header>
</template>

<!-- Скрипт -->
<script>
export default {
  name: "FooterComp",
  components: {},

  data() {
    return {};
  },

  methods: {},
};
</script>

<!-- стили -->
<style scoped>
.footer {
  margin-top: 100px;
  height: 150px;
  background-color: rgb(54, 54, 54);
}

.text {
  color: white;
}
</style>
