<template>
  <b-container>
    <b-card border-variant="light" align="justify" header="Cadastro">
      <b-alert variant="dark" :show="mensagem != ''">{{mensagem}}</b-alert>
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Email :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            required
            placeholder="Inform seu email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Senha :" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            required
            placeholder="Informe sua senha"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="dark">Cadastrar</b-button>
      </b-form>
    </b-card>
  </b-container>
</template>

<script>
import { auth } from "@/database";
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      mensagem: ""
    };
  },
  methods: {
    onSubmit(evento) {
      this.mensagem = "Cadastrando...";
      auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then(user => {
          this.mensagem = "";
          //          user
          //            .updateProfile({
          //              displayName: this.form.nome
          //            })
          //            .then(result => {
          //              this.$router.push({ path: "/" });
          //            })
          //            .catch(erro => {
          //              console.log(erro);
          //            });
          this.$router.push({ path: "/" });
        })
        .catch(erro => {
          this.mensagem = erro.message;
          console.log(erro);
        });

      evento.preventDefault();
      //alert(JSON.stringify(this.form));
    }
  }
};
</script>