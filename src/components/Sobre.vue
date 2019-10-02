<template>
  <b-container fluid class="main">
    <div>
      <b-card border-variant="light"  header="Sobre Nós" align="center">
        <b-card-text>Esse projeto busca um entendimento sobre as diferentes formas de aprendizagem do aluno bem como proporcionar um mecanismo de entendimento ao próprio discente de suas formas de estudo através do presente site.</b-card-text>
        <b-card-text>A seguir estão os colaboradores do presente projeto. Orientandas Amanda Gatti, Maria Isabel Pitt Gatti e Giovana Maria Marconde Gonçalves, orientadora Daniela Domingos de Oliveira e coorientador Fabrício Bizotto, respectivamente.</b-card-text>
      </b-card>
      <b-row class="mt-3">
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://lh3.googleusercontent.com/p/AF1QipMMyJFvtcuFFkOWAG_fk28cukTeZNy2l2wwM8zT=s512-p-qv=putthfnpdindd7bcmfg9ov932jv0cobt6,m=201059ecc086d4b77dd085e97cff31b5,x=,t=41-iv4342?key=c2x2MW5WSjVLcGc2RWpnOEJDajhlQXdVZHA5ZUp3"
            alt="Image 1"
          ></b-img>
          <b-button class="botao" variant="dark">@amandag_ag</b-button>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://lh3.googleusercontent.com/ASzCkmn83tIAh5A1r_o3w2JTyK9CserVmOMTMri11It2oIUu-_r73PI0rjK0xq8q3NbxVaRXUHUtVy-fBQ=w328-h275-no"
            alt="Image 2"
          ></b-img>
          <b-button class="botao" variant="dark">@bebel_gatti</b-button>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://lh3.googleusercontent.com/PIIUgycu_ts3z3aGtS_OPFRe1-3sVy37ThAo1Ewjc_lU3n6TjNUMIPOllbyyFkIJu5cFLK9osjba8DSWkQ=w328-h275-no"
            alt="Image 3"
          ></b-img>
          <b-button class="botao" variant="dark">@giovana_marcondes9</b-button>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://lh3.googleusercontent.com/xHVy9YgWqlwnBIKKKDse-Epi92qbpY0X9xWe3xjQxwoVGZDbVwLye4hqhRrvQmocxgLIp9gOve5mO2Lq9dususDYNMoq9OFX8110W0fs2zJGQdsCrqElF_V1A6tH_D64hrETMO5lctoeodOe98f2hp9Q0A6fqUaTH2n4koDVFCkrJlKyNM2_XaZB12169bJEkrPMHOVbAz8SyFPzOehnsiWm7MaLM7Rt6xwivLdJDMZTIPWxW13miDFHcshvHBP8jn7fBbn6qjA6naKyqHH7Nya_R3XN1EHpv1REjEII_jdRC3vfAJJ6Vx1bH_90l-0ShMuxHq-6td41mJVWBlKS0qiHNb86ZPmiZ7uKFHRz8QubpeKTYYtv7LtHtcc7hEHd85DYIxneObtoM1UND09lphsuB1mZxVSg8QRzNlvapZoaGntLDId39-4aeUnyNiLbkC2RTijvM7OsRn2gbc14P25EAJdjgP_uOEhKumPVC9reNitRZtS_lljn7dh9e3Lu9ILaGSaYZJVrtC0y6a_6_Yb9nYlTK2DIq1_PIIQlzvJBlKs098KXXzhufNKc-Pbz_O6KpTruIEqDYwTPoW_dQASQAdhDbyMcQDzg66PI8648YaaXbKBPJk8Qx_FkfTFoDUbf_vn9zQbno7U14HIDv70nXCLDqXiAD31J3-YxhfCh6qk2VjajvA=w918-h771-no"
            alt="Image 3"
          ></b-img>
          <b-button class="botao" variant="dark">@daniela_domingos</b-button>
        </b-col>
        <b-col>
          <b-img
            thumbnail
            fluid
            src="https://lh3.googleusercontent.com/wOqHpFyKPj9ovmw2yYtH1XJ4SZO8ooUlKZdnZ7fpZ2Q8Al00yGG36mwDPXOhTpQDMjDtJ_H1bKCOul-DeQ=w328-h275-no"
            alt="Image 4"
          ></b-img>
          <b-button class="botao" variant="dark">@fabricio_bizotto</b-button>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "Sobre",
  props: {
    msg: String
  }
};
</script>

<style>
.main {
  text-align: justify;
}
button {
  margin-top: 10px;
  alling: center;
}
</style>

