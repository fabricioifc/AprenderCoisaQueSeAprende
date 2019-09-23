<template>
  <div id="quiz">
    <b-container>
      <b-row align-v="start">
        <b-col cols="12" v-if="iniciou">
          <div v-if="iniciou && !finalizou">
            <Questao v-if="iniciou" :questao="questaoAtual" @responder="responder"></Questao>
          </div>
          <div v-if="finalizou && !encerrou">
            <ResultadoQuiz :respostas="respostas"></ResultadoQuiz>
          </div>
          <div>
            <b-progress
              v-if="iniciou && !finalizou"
              :value="indice"
              :max="quantidadeDeQuestoes"
              :label="`${indiceAtual}/${quantidadeDeQuestoes}`"
              height="2rem"
              animated
            ></b-progress>
          </div>
        </b-col>
        <b-col align-h="center" cols="12">
          <hr v-if="iniciou && finalizou">
          <b-card
            border-variant="light"
            
            align="center"
            v-if="!iniciou"
            class="texto"
          >
            <b-card-text
              class="letras"
            >Você quer saber de que maneira você estuda segundo a sua inteligência? Faça o quiz abaixo!</b-card-text>
          </b-card>
          <b-button
            class="iniciou"
            block
            size="lg"
            @click="iniciarQuiz"
            variant="info"
            v-if="!iniciou"
          >Iniciar o Quiz</b-button>
          <b-button
            @click="encerrarQuiz"
            variant="outline-light"
            v-if="iniciou && finalizou"
            class="fim"
          >Finalizar Quiz</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import dados from "../data/quiz";
import Questao from "./Questao";
import ResultadoQuiz from "./ResultadoQuiz";

export default {
  name: "Quiz",
  props: {},
  components: { Questao, ResultadoQuiz },
  data() {
    return {
      iniciou: false,
      finalizou: false,
      encerrou: false,
      quantidadeDeQuestoes: 0,
      indice: 0,
      indiceAtual: 0,
      questaoAtual: null,
      questoes: dados,
      respostas: []
    };
  },
  created() {
    console.log(dados);
  },
  methods: {
    iniciarQuiz() {
      this.iniciou = true;
      this.finalizou = false;
      this.encerrou = false;
      this.quantidadeDeQuestoes = this.questoes.length;
      this.indiceAtual = this.indice + 1;
      this.questaoAtual = this.questoes[this.indice];
    },
    responder(valor) {
      this.respostas.push({
        titulo: this.questaoAtual.titulo,
        tipo: this.questaoAtual.tipo,
        descricao: this.questaoAtual.descricao,
        pontos: valor
      });

      this.indice++;

      if (this.quantidadeDeQuestoes > this.indiceAtual) {
        this.indiceAtual = this.indice + 1;
        this.questaoAtual = this.questoes[this.indice];
        //console.log(this.respostas);
      } else {
        this.finalizarQuiz();
      }
    },
    finalizarQuiz() {
      this.finalizou = true;
    },
    encerrarQuiz() {
      this.finalizarQuiz();
      this.quantidadeDeQuestoes = 0;
      this.indice = 0;
      this.indiceAtual = 0;
      this.questaoAtual = null;
      this.respostas = [];
      this.encerrou = true;
      this.iniciou = false;
    }
  }
};
</script>

<style scoped>
.texto {
  margin-top: 200px;
}
.iniciou {
  margin-top: 50px;
  font-size: 200%;
}
.letras {
  font-size: 170%;
}
.fim {
  font-size: x-large;
}
</style>
