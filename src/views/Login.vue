<template>
  <div class="login">
    <h1>APP LOGIN</h1>
    <form @submit.stop.prevent>
        <div class="container">
            <label for="input-email">E-mail : </label>
            <b-form-input
              id="input-email"
              v-model="email"
              placeholder="Enter your e-mail"
              name="email"
              required
              @input="handleChange"
            />
            <label for="input-password">Password : </label>
            <b-form-input
              id="input-password"
              type="password"
              v-model="password"
              placeholder="Enter Password"
              name="password"
              @input="handleChange"
              required
            />
            <b-button
              class="button-login"
              variant="success"
              type="submit"
              :disabled="isNotValid"
              href="/usuarios"
            >
              Login
            </b-button>
            <p><input type="checkbox" checked="checked"> Remember me</p>
            <p>Forgot <a href="#"> password? </a></p>
            <b-button
              href="/cadastro"
              variant="danger"
            >
              Cadastrar
            </b-button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      // isNotValid: true,
    };
  },
  methods: {
    handleChange() {
      const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      const minPass = 6;
      if (this.password.length >= minPass && emailPattern.test(this.email)) {
        this.isNotValid = false;
      }
      return true;
    },
  },
};
</script>

<style scoped type="text/css">
  Body {
    font-family: Calibri, Helvetica, sans-serif;
  }
  button {
    color: rgb(255, 255, 254);
    padding: 15px;
    margin: 10px 0px;
    border: none;
    cursor: pointer;
  }
  form {
    border: 3px solid #f1f1f1;
  }
  input[type=text], input[type=password] {
    width: 100%;
    margin: 8px 0;
    padding: 12px 20px;
    display: inline-block;
    box-sizing: border-box;
  }
  button:hover {
    opacity: 0.7;
  }
  .cancelbtn {
    width: auto;
    padding: 10px 18px;
    margin: 10px 5px;
  }
  .container {
    padding: 25px;
    background-color: rgb(189, 189, 189);
    box-shadow: 10px 5px 5px black;
    border-radius: 20px;
  }
  .button-login {
    width: 100%;
  }
</style>
