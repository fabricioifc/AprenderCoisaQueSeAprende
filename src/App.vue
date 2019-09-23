<template>
  <div id="app" class="masthead">
    <NavBar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
#app {
  font-family: 'Quicksand', sans-serif;
  font-size: 18px;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /* margin-top: 60px; */
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

div.masthead {
  position: relative;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 100px;
  color: #000;
  background: url(
      https://blackrockdigital.github.io/startbootstrap-new-age/img/bg-pattern.png
    ),
    linear-gradient(to left, #8fe2c9, rgb(241, 149, 200));
}
div.masthead .header-content {
  max-width: 500px;
  margin-bottom: 100px;
  text-align: center;
}
div.masthead .header-content h1 {
  font-size: 30px;
}
div.masthead .device-container {
  max-width: 325px;
  margin-right: auto;
  margin-left: auto;
}
div.masthead .device-container .screen img {
  border-radius: 3px;
}
@media (min-width: 992px) {
  div.masthead {
    height: 100vh;
    min-height: 775px;
    padding-top: 0;
    padding-bottom: 0;
  }
  div.masthead .header-content {
    margin-bottom: 0;
    text-align: left;
  }
  div.masthead .header-content h1 {
    font-size: 50px;
  }
  div.masthead .device-container {
    max-width: 325px;
  }
  .card-header{
    font-weight: bold;
  }
}
</style>
