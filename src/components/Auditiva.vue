<template>
  <b-container fluid class="main">
    <b-card border-variant="light" bg-variant="dark" header="Inteligência Auditiva" align="center">
      <img src="../assets/auditiva.jpg" img-alt="Image">
      <b-card-text>Pessoas que gostam de observar desenhos, imagens, gráficos, cores, têm o sentido da visão muito aguçado. Na hora de estudar elas devem buscar desenhar ou construir gráficos e mapas mentais que trabalhem com cores e formas. Mesmo a aula pode ser o suficiente para essa pessoa, pois na escola essa inteligência é muito explorada.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Auditiva",
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

