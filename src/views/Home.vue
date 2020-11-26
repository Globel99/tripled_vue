<template>
    <div>
        <ProductHome image-name="bagoly.jpg" title="Leírás a bagolyhoz" color="bg-white"></ProductHome>
        <ProductHome image-name="hajo.jpg" title="Leírás a hajóhoz" color="bg-black"></ProductHome>
    </div>
</template>

<script>
import ProductHome from '../components/ProductHome'

export default {
    name: "Home",
    components: {
        ProductHome
    }
}
</script>

<style scoped>
.gradient-white-to-black{
    background-image: linear-gradient(to top,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 11.29%) 8.1%,
    hsl(0, 0%, 22.04%) 15.5%,
    hsl(0, 0%, 32.25%) 22.5%,
    hsl(0, 0%, 41.88%) 29%,
    hsl(0, 0%, 50.92%) 35.3%,
    hsl(0, 0%, 59.33%) 41.2%,
    hsl(0, 0%, 67.09%) 47.1%,
    hsl(0, 0%, 74.16%) 52.9%,
    hsl(0, 0%, 80.5%) 58.8%,
    hsl(0, 0%, 86.07%) 64.7%,
    hsl(0, 0%, 90.81%) 71%,
    hsl(0, 0%, 94.66%) 77.5%,
    hsl(0, 0%, 97.54%) 84.5%,
    hsl(0, 0%, 99.36%) 91.9%,
    hsl(0, 0%, 100%) 100%);   
    height: 15px;
}
.gradient-black-to-white{
    background-image: linear-gradient(to bottom,
    hsl(0, 0%, 0%) 0%,
    hsl(0, 0%, 11.29%) 8.1%,
    hsl(0, 0%, 22.04%) 15.5%,
    hsl(0, 0%, 32.25%) 22.5%,
    hsl(0, 0%, 41.88%) 29%,
    hsl(0, 0%, 50.92%) 35.3%,
    hsl(0, 0%, 59.33%) 41.2%,
    hsl(0, 0%, 67.09%) 47.1%,
    hsl(0, 0%, 74.16%) 52.9%,
    hsl(0, 0%, 80.5%) 58.8%,
    hsl(0, 0%, 86.07%) 64.7%,
    hsl(0, 0%, 90.81%) 71%,
    hsl(0, 0%, 94.66%) 77.5%,
    hsl(0, 0%, 97.54%) 84.5%,
    hsl(0, 0%, 99.36%) 91.9%,
    hsl(0, 0%, 100%) 100%);   
    height: 15px;
}
</style>