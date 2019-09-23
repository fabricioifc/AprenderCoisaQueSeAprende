<template>
  <b-container fluid class="main">
    <b-card border-variant="light"  header="Inteligência Musical" align="center">
      <img src="../assets/musical.jpg" img-alt="Image">
      <b-card-text>Você tem algum amigo que está sempre batucando? Que sempre está no ritmo e que tem muita facilidade para o ramo musical? Para esse seu amigo a melhor forma de estudar é com paródias ou teatros musicais, assim o conteúdo se associará ao ritmo e à melodia, que para essa pessoa é muito fácil de lembrar.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Musical",
  props: {
    msg: String
  }
};
</script>

<style>
.main {
  text-align: justify;
}
</style>