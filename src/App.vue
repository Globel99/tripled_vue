<template>
  <div id="app">
    <Nav />
    <router-view id="routerView"></router-view>
    <div id="greyElement" style="display: none"></div>
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

#greyElement{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 99;
  transition: opacity 0.7s;
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
