<template>
  <b-container fluid class="main">
    <b-card border-variant="light"  header="Inteligência Corporal" align="center">
      <img src="../assets/corporal.jpg" img-alt="Image">
      <b-card-text>Pessoas que amam estar em movimento, que tem plena noção de seu corpo e das coisas que pode fazer com ele, como dançar, praticar esportes, construir coisas, devem buscar estudar praticando os conteúdos e em alguns intervalos estudar a teoria.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Corporal",
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