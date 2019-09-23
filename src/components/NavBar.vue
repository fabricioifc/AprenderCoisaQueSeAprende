<template>
  <div>
    <b-navbar toggleable="lg">
      <b-navbar-brand to="/">
        <img src="../assets/logo.png" alt="Responsive image" width="40">
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="sobre">Sobre</b-nav-item>
          <b-nav-item to="quiz">Quiz</b-nav-item>
          <b-nav-item to="Gardner">Teoria de Gardner</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown text="Aprender a Aprender">
            <b-dropdown-item to="problemas">Problemas de Memória</b-dropdown-item>
            <b-dropdown-item to="lugar">Lugar Ideal</b-dropdown-item>
            <b-dropdown-item to="hora">Hora Ideal</b-dropdown-item>
            <b-dropdown-item to="maneiras">Maneiras de Aprender</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item v-if="user == null" to="/login">Login</b-nav-item>
          <b-nav-item v-if="user != null" to="/logout">Logout</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { auth } from "@/database";
export default {
  name: "navbar",
  props: {},
  data() {
    return {
      user: null
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  }
};
</script>

<style>
.bg-dark {
  background-color: transparent !important;
}
</style>
