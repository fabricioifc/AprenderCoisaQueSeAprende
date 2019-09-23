<template>
  <div class="mx-auto">
    <b-button v-b-modal.modal-1 variant="info" pill size="lg">Recomendação</b-button>

    <b-modal id="modal-1" size="lg" :title="recomendacao[0].titulo" ok-only>
      <p class="my-4">{{recomendacao[0].descricao}}</p>
      <b-embed type="iframe" aspect="16by9" :src="recomendacao[0].link" allowfullscreen></b-embed>
    </b-modal>
  </div>
</template>

<script>
import recomendacaoPorTipo from "../data/resultados";
export default {
  props: ["respostasPorTipo"],
  data() {
    return {
      recomendacao: null
    };
  },
  created() {
    console.log(this.respostasPorTipo);

    var maisPontuada = null;
    this.respostasPorTipo.map(item => {
      if (maisPontuada == null || maisPontuada.pontos < item.pontos) {
        maisPontuada = item;
      }
    });

    console.log(maisPontuada);
    this.recomendacao = recomendacaoPorTipo.filter(
      rec => rec.tipo === maisPontuada.tipo
    );
  },
  methods: {},
  computed: {}
};
</script>
<style>
.btn-primary {
  background-color: #343a40;
  border-color: #343a40;
}
</style>

