<template>
  <section class="adminPage">
    <h1>Админка</h1>
    <form class="form" @submit="postForm">
      <!-- <label class="label"
        >Имя пользователя:
        <input
          class="input"
          type="text"
          id="username"
          name="username"
          required
          v-model.trim="username"
      /></label> -->

      <label class="label"
        >Email:
        <input
          class="input"
          type="email"
          id="email"
          name="email"
          required
          v-model.trim="email"
      /></label>

      <label class="label"
        >Пароль:
        <input
          class="input"
          type="password"
          id="password"
          name="password"
          v-model.trim="password"
          required
      /></label>
      <!-- <label class="label"
        >Подтвердите пароль:
        <input
          class="input"
          type="password"
          id="confirm_password"
          name="confirm_password"
          required
      /></label> -->

      <input type="submit" value="Зарегистрироваться" />
    </form>
  </section>
</template>

<!-- Скрипт -->
<script>
export default {
  name: "AdminPage",
  components: {},

  data() {
    return {
      // username: "",
      email: "",
      password: "",
      // is_super_user: false,
      dataForm: {},
    };
  },

  methods: {
    async postForm(event) {
      event.preventDefault();

      this.dataForm = {
        is_super_user: false,
        tg_id: 0,
        email: this.email,
        password: this.password,
      };
      // console.log(this.dataForm);

      const res = await fetch("https://75c818a8411c0672.mokky.dev/superuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(this.dataForm),
      });
      const data = await res.json();
      console.log(data);

      window.location.href = "https://www.google.com";
    },
  },
};
</script>

<!-- стили -->
<style scoped>
.adminPage {
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;

  display: flex;
  flex-direction: column;
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

.form {
  display: flex;
  flex-direction: column;
  justify-content: left;
  gap: 30px;
}

.label {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 10px;
}

.input {
  width: 100%;
}
</style>
