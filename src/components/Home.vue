<template>
  <div id="home">
    <b-container>
      <img src="../assets/frase.png" img-alt="Image" height="800px" weight="800px">
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  props: {
    msg: String
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  text-align: center;
  font-family: bree;
}
img {
  margin: 0;
  position: absolute;
  top: 40%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
}
</style>
