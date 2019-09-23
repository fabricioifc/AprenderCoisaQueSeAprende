<template>
  <b-container fluid class="main">
    <b-card
      border-variant="light"
      
      header="Inteligência Linguística"
      align="center"
    >
      <img src="../assets/linguistica.jpg" img-alt="Image">
      <b-card-text>Sabe aquela pessoa que ama ler, falar e escrever? Então, essa pessoa tem muita afinidade com as palavras e as domina, a melhor forma para ela estudar é usando as palavras. Esta pessoa pode buscar escrever sobre os conteúdos, criar peças e histórias sobre eles e também buscar fazer apresentações para sua família ou seus amigos.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Linguistica",
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