<template>
  <div>
    <b-card no-body class="card">
      <b-tabs pills card vertical>
        <b-tab title="Por Conhecimento" variant="dark" active>
          <b-card-text>
            <b-table
              striped
              hover
              :items="respostasPorTipo"
              :sort-by.sync="sortBy"
              :sort-desc.sync="sortDesc"
            ></b-table>
          </b-card-text>
        </b-tab>

        <b-tab title="Relatório Geral">
          <b-card-text>
            <div class="overflow-auto">
              <b-table
                id="my-table"
                :items="respostas"
                :per-page="perPage"
                :current-page="currentPage"
                :fields="fields"
                small
                striped
                hover
              ></b-table>

              <b-pagination
                variant="dark"
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="my-table"
                aling="fill"
              ></b-pagination>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>

      <QuizRecomendacao :respostasPorTipo="respostasPorTipo"></QuizRecomendacao>
      <br>
    </b-card>
  </div>
</template>

<script>
import QuizRecomendacao from "./QuizRecomendacao";
export default {
  components: { QuizRecomendacao },
  props: ["respostas"],
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      fields: ["tipo", "descricao", "pontos"],
      fieldsPorTipo: ["tipo", "pontos"],
      respostasPorTipo: [], 
      sortBy:"pontos",
      sortDesc: true
    };
  },
  created() {
    this.respostasPorTipo = this.agrupadoPorTipo();
  },
  methods: {
    agrupadoPorTipo() {
      var result = [];
      this.respostas.map(item => {
        let respostaExiste = result.filter(data => data.tipo === item.tipo);

        if (respostaExiste.length <= 0) {
          result.push({
            tipo: item.tipo,
            pontos: item.pontos
          });
        } else {
          var id = result.findIndex(obj => obj.tipo == item.tipo);
          result[id].pontos += item.pontos;
        }
      });
      return result;
    }
  },
  computed: {
    total: function() {
      let sum = 0;
      return this.respostas.reduce((sum, item) => sum + item.pontos, 0);
    },
    rows: function() {
      return this.respostas.length;
    }
  }
};
</script>

<style>
.page-link {
  color: #343a40;
}
.page-item.active .page-link {
  background-color: #343a40;
  border-color: #343a40;
}
a:hover {
  color: #343a40;
}
.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  background-color: #343a40;
}
a {
  color: #343a40;
}
b-table {
  padding-top: 20px;
}
.card {
  margin-top: 5px;
}
</style>
