<template>
    <Header/>
    <Banner v-bind:backgroundImage='require("@/assets/placeholder.png")'/>
    <div id="products-section">
        <div id="product-section-content">
            <ProductView/>
            <ProductView/>
            <ProductView/>
            <ProductView/>
            <ProductView/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Banner from "@/components/Banner.vue"
import ProductView from "@/components/ProductView.vue"

export default {
    name: "Products",
    components: {
        Header,
        Banner,
        ProductView
    }
}
</script>

<style>
#products-section {
    background-color: aqua;
    display: flex;
    justify-content: center;
}

#product-section-content {
    background-color: yellow;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>