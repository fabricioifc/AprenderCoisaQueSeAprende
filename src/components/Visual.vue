<template>
  <b-container fluid class="main">
    <b-card border-variant="light" bg-variant="dark" header="Inteligência Visual" align="center">
      <img src="../assets/visual.jpg" img-alt="Image">
      <b-card-text>Indivíduos com a vida mais voltada para a audição podem se focar mais nas aulas, pois estas são quase todas com explicações orais do professor. Videoaulas são uma opção, até mesmo buscar ouvir áudios de si mesmo, da internet ou de um amigo.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Visual",
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

