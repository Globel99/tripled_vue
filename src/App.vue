<template>
  <div id="app">
    <Nav />
    <router-view id="routerView"></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {

  name: "App",
  components: {
    Nav
  },
  methods: {

  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.bg-grey{
    background-color: lightgray;
}
.bg-black{
    background-color: black;
}
.logo{
    height: 100%;
    display: block;
}

body{
  transition: 0.7s;
}

@media screen and (min-width: 600px) {
    #brandName, #sideNav {
      display: none;
    }
    body{
      background-color: white !important;
    }
  }
</style>
