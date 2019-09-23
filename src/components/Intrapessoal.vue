<template>
  <b-container fluid class="main">
    <b-card
      border-variant="light"
      bg-variant="dark"
      header="Inteligência Intrapoessoal"
      align="center"
    >
      <img src="../assets/intrapessoal.jpg" img-alt="Image">
      <b-card-text>Indivíduos que são tímidos, que não gostam de estar com muitas pessoas e que curtem sua própria companhia podem buscar o estudo independente e através de pesquisas. Ao estudar sozinho esse indivíduo estará mais à vontade e se concentrará mais no estudo.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Intrapessoal",
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