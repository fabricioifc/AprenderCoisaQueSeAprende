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
            src="https://lh3.googleusercontent.com/fTDr1hLMalFa-A8IF64VnTYW_jFMdwMF47AtxKAA-PJ9TP0QckrcgfM55f4vN1hu2G3PXZuYHU5m6777IxXViZH0C2RbdJAVSFupApH012nNHhEG4OfdoCnI_H4qRnc1Wc7qxHCVT9-c_mXJaUAZOacNubfnl3kFCsu4cnn-ejgQ885NPyP-gqZOunERpY0TSF0L2LijdJrNYhuRY4fH3mMXjb2xj09yT4XMRmFPu4w804HeOwHpfRoy-qH4kHNgMhfFnaEW7sBRSv5FiNXEVKT3agBHcAFrYKa9Shd-YI32DCIERbb8dqI6ed3xsy0C7IA5EZCq7A-iCyJOTDYsYMDM2iCtq2g-RO0JqqrtGWaUCfot3FKIKBAvtHZLtkKSetu92LuKkC3Famatzs_UFka-W7ZxykYRH6YhP0HNxNip_jOZFescvHkulD1Jc91lBr1eXFXLSZWdO5y38Tyk-_62m1mdxZDY9f2FR8AvEWePG01B0QCBKnONBGLMxT9_t3tPyytPeunLhd3qN4V3_aUsK8tfqAMgNo7DuFyUEBUHL_g9h-UtG7KftEvgykXK_BgBS3gH11Q1dDV4w0gAmRo600TgwgNiYAaHzgakKxLp6aNXoaNx5_oePZAVIczy1QIG60LGqe-JBACY_S0lWO2-uahtPmz7mIlmMVswgUBV1MYSTyMHfbg=s554-no"
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

