<template>
    <div class="product-home-view" :class="color">
        <a href="/123" class="product-link">
            <img :src="imageName" class="product-image-home" alt="">
            <div class="product-title pb-5">
                {{ title }}
            </div>
        </a>
    </div>
</template>

<script>
export default {
    name: "ProductHome",
    props: ["imageName", "title", "color"]
}
</script>

<style scoped>

.product-image-home{
        max-height: 400px;
        max-width: 100%;
    }
.product-link{
    color: black;
    text-decoration: none;
}
.black-home-view{
    background-color: black;
}

.product-title{
    font-size: 24px;
}
.bg-black .product-title{
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