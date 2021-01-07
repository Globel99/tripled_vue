<template>
    <div :class="color">
        <div class="itemName display-4">
            {{ itemName }}
        </div>
        <div class="imageContainer">
            <img :src="imageNameList[0]" class="product-image" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: "Item",
    props: ["itemName", "imageNameList", "color"],
    methods: {

    }
}
</script>

<style scoped>

.product-image{
        max-height: 400px;
        max-width: 100%;
    }
.product-link{
    color: black;
    text-decoration: none;
}


.product-title{
    font-size: 24px;
}
.bg-black .itemName{
    color: white;
}

/* @media screen and (min-width: 600px) {
    #brandName, #sideNav {
      display: none;
    }
    body{
      background-color: white !important;
    }
  } */
</style>