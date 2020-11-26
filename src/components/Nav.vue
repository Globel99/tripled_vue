<template>
<div class="sticky-top">
    <nav class="p-0 pl-2 justify-content-start navbar navbar-expand-lg navbar-light bg-light border-bottom border-secondary">
        <button v-on:click="toggleNav" class="navbar-toggler" type="button" data-toggle="collapse" onclick="toggleNav()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <router-link to="/">
            <img class="_home" src="logo.svg" alt="">
        </router-link>
        <div id="brandName">
            TripleD Tech
        </div>
        <div class="collapse navbar-collapse">
            <ul class="_navbarList" id="navbarList">
                <li>
                    <router-link to="/tok" class="p-3">Telefon Tokok</router-link>
                </li>
                <li>
                    <router-link to="/vaza" class="p-3">Vázák</router-link>
                </li>
            </ul>
        </div>
    </nav>

    <div :style="sideNavStyle" id="sideNav">
        <router-link to="/tok">Telefon Tokok</router-link>
        <router-link to="/vaz">Vázák</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Nav",
    data() {
        return {
            toggled: false,
            sideNavStyle: "width: 0"
        }
    },
    methods: {
        toggleNav: function () {
            const el = document.getElementById("greyElement")
            console.log("toggle")
            this.toggled ? this.closeNav(el) : this.openNav(el)
        },
        closeNav (_el) {
            console.log("closeNav")
            this.sideNavStyle = "width: 0"
            _el.style.display = "none"
            _el.style.opacity = "1"
            this.toggled = false
        },
        openNav (_el) {
            console.log("openNav")
            this.sideNavStyle = "width: 250px"
            _el.style.display = "block"
            _el.style.transition = "0.7s"
            _el.style.opacity = "0.3"
            this.toggled = true
        }
    }
}
</script>

<style scoped src="@/assets/css/nav.css">
</style>