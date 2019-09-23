<template>
  <b-container fluid class="main">
    <b-card
      border-variant="light"
      
      header="Inteligência Interpessoal"
      align="center"
    >
      <img src="../assets/interpessoal.jpg" img-alt="Image">
      <b-card-text>Pessoas que amam a interação social, estar rodeado de pessoas e conversar, têm a possibilidade de montar grupos de estudos, e realizar debates, seminários e rodas de discussão. Sempre se organizando com os temas e como o grupo irá funcionar.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Interpessoal",
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