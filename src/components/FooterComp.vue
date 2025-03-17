<template>
  <header class="footer">
    <router-link to="/admin">
      <p>админка</p>
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
}
</style>
