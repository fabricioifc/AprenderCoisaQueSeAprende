<template>
  <b-container fluid class="main">
    <b-card
      border-variant="light"
      bg-variant="dark"
      header="Inteligência Lógico-Matemática"
      align="center"
    >
      <img src="../assets/logica.jpg" img-alt="Image">
      <b-card-text>Quem ama números aí? Quem leva sua vida de forma lógica? E tem grande facilidade em seguir a lógica e a -matemática?. Se você é essa pessoa, a melhor forma para você estudar é de forma organizada e objetiva. Monte mapas mentais ou esquemas que tratem temas de forma lógica, pois assim você conseguirá vizualizá-los melhor.</b-card-text>
      <b-button variant="dark" to="Maneiras">Voltar</b-button>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: "Logico",
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

