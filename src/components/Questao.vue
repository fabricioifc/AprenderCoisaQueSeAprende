<template>
  <div id="questao" class="linguistica">
    <div>
      <b-card :title="questao.titulo" class="questao-card" size="xl">
        <b-card-text>{{questao.descricao}}</b-card-text>

        <b-button-group>
          <b-button variant="info" @click="enviar(2)">Concordo</b-button>
          <b-button variant="dark" @click="enviar(0)">Discordo</b-button>
          <b-button variant="secondary" @click="enviar(1)">Concordo Parcialmente</b-button>
        </b-button-group>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Questao",
  props: ["questao"],
  methods: {
    enviar(valor) {
      this.$emit("responder", valor);
    }
  }
};
</script>


<style>
.card {
  background-color: transparent;
}
.progress-bar {
  background-color: #383b3b;
}
.card.questao-card {
  margin-top: 50px;
  font-size: 150%;
}
</style>
