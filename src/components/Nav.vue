<template>
<div class="sticky-top">
    <nav class="p-0 pl-2 justify-content-start navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary">
        <button v-on:click="toggleNav" class="navbar-toggler" type="button" data-toggle="collapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/">
            <img class="_home" src="logo.svg" alt="">
        </router-link>
        <div id="brandName">
            <router-link to="/">
                TripleD Tech
            </router-link>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="_navbarList" id="navbarList">
                <li>
                    <router-link to="/info" class="p-3" v-on:click.native="onNavClick">Információ</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <div :style="sideNavStyle" id="sideNav">
        <router-link to="/info" v-on:click.native="onNavClick">Információ</router-link>
    </div>
    
    <div id="greyElement" :class="{fadeout: fadeout, fadein: !fadeout}" v-if="toggled === true"></div>
    
</div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            toggled: false,
            fadeout: false,
            sideNavStyle: "width: 0"
        }
    },
    methods: {
        toggleNav: function () {
            console.log("toggle")
            this.toggled ? this.closeNav() : this.openNav()
        },
        closeNav () {
            console.log("closeNav")
            this.sideNavStyle = "width: 0"
            this.fadeout = true
            setTimeout(() => {this.toggled = false}, 500)
        },
        openNav () {
            console.log("openNav")
            this.sideNavStyle = "width: 250px"
            this.fadeout = false
            this.toggled = true
        },
        onNavClick () {
            console.log("onNavClick")
            this.closeNav()
        }
    }
}
</script>

<style scoped>
#greyElement{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 2;
  opacity: 0;
  transition: opacity 0.5s;
}

.fadeout{
    transition: opacity 0.5s;
    opacity: 0 !important;
}

.fadein{
    transition: opacity 0.5s;
    opacity: 0.5 !important;
}

nav, #sideNav{
    z-index: 99;
}
</style>

<style scoped src="@/assets/css/nav.css">
</style>