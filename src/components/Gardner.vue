<template>
  <div class="container">
    <div class="main" >
      <b-card border-variant="light" bg-variant="dark"  header="Gardner">
        <b-tabs content-class="mt-3" variant="dark">
          <b-tab title="Biografia" active>
            <b-row>
              <b-col>
                <img src="../assets/Howard.jpg" img-alt="Image">
              </b-col>
              <b-col>
                <p>Howard Gardner nasceu em 1943, foi psicólogo e pesquisador da universidade norte-americana de Harvard e também o autor da Teoria das Inteligências Múltiplas.</p>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Teoria da inteligências Múltiplas">
            <b-row>
              <b-col>
                <img src="../assets/download.jpg" img-alt="Image">
              </b-col>
              <b-col>
                <p>Você já pensou que diversas pessoas que são ótimos alunos durante a escola podem não obter sucesso em sua vida? Ou o contrário, pessoas que fracassaram em sua vida acadêmica podem obter grande êxito no decorrer da sua vida?</p>
                <p>Howard Gardner percebeu exatamente isso e começou a desenvolver uma pesquisa, para sanar sua curiosidade do porquê desse fenômeno. Ao fim dessa pesquisa, concluiu que as técnicas usadas na escola não eram eficientes, pois estas levavam em consideração apenas a Teoria do QI, de Alfred Binet, a qual demonstrou ser uma teoria pouco abarcadora, uma vez que muitas pessoas não se encaixavam nessa teoria. Dessa forma, Gardner criou a Teoria das Inteligências Múltiplas, na qual afirma que as pessoas possuem diversos tipos de inteligências ou dons.</p>
              </b-col>
              <b-col>
                <p>A inteligência, para Gardner, é a capacidade de resolver problemas ou elaborar produtos valorizados em um ambiente cultural ou comunitário. A partir dessa definição, ele identificou oito tipos de inteligências, as quais, segundo o teórico, não representam um número final e definitivo.</p>
                <p>Gardner classificou as inteligências em: inteligência linguística, inteligência lógico-matemática, inteligência espacial, inteligência musical, inteligência cinestésica, inteligência interpessoal e intrapessoal, inteligência corporal cinestésica, inteligência naturalista e, inteligência existencial. Segundo o autor, os seres humanos possuem essas inteligências em quantidades variadas, e cada um as combina de formas diferentes.</p>
              </b-col>
            </b-row>
          </b-tab>
          <b-tab title="Gardner em Sala de Aula">
            <b-row>
              <b-col>
                <img src="../assets/Sala.jpg" img-alt="Image">
              </b-col>
              <b-col>
                <p>A partir a teoria de Gardner, é possível mudar toda a aprendizagem, pois é possível compreender que as pessoas possuem diferentes inteligências e por isso diferentes modos de aprender.</p>
                <p>Assim, Gardner sugere mudanças com relação ao desenvolvimento de avaliações e à educação. Hoje, a avaliação é tida como um produto do aprendizado, quando, no entanto, esta deve ser parte do processo de aprendizado e deveria ser realizada das formas mais variadas possíveis para que todos sejam beneficiados.</p>
                <p>No que se refere à educação, Gardner chama a atenção para o fato de que, as escolas devem preparar seus alunos para a vida. O que só será possível se os alunos forem encorajados a usar seu conhecimento para solucionar problemas reais. O aluno deve ser encorajado a desenvolver suas habilidades individuais para solucionar os problemas que a ele forem apresentados.</p>
              </b-col>
            </b-row>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "gardner"
};
</script>

<style>
.main {
  text-align: justify;
}
a {
  color: rgb(61, 60, 60);
}
a:hover {
  color: black;
}
.nav-tabs .nav-link {
  border-color: #fff;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  background-color: transparent;
}
</style>
