<template>
  <div id="app">
    <Nav />
    <router-view/>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {

  name: "App",
  components: {
    Nav
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  transition: 0.7s;
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

@media screen and (min-width: 600px) {
    #brandName, #sideNav {
      display: none;
    }
  }
</style>
