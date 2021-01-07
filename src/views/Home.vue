<template>
    <div>
        <div class="mt-3 display-2">
            3D nyomtatott egyedi termékek
        </div>
        <ItemOnList href="termek/bagoly" image-name="bagoly.jpg" title="Leírás a bagolyhoz" color="bg-white"></ItemOnList>
        <ItemOnList href="/hajo" image-name="hajo.jpg" title="Leírás a hajóhoz" color="bg-black"></ItemOnList>
    </div>
</template>

<script>
import ItemOnList from '../components/ItemOnList'

export default {
    name: "Home",
    components: {
        ItemOnList
    }
}
</script>