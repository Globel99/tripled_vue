<template>
    <div>
        <a href="/123">
            <img :src="imageName" style="width: 100%" alt="">
            <div>
                {{ title }}
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "ProductHome",
    props: ["imageName", "title"]
}
</script>

<style scoped>

</style>