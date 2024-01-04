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

<style scoped>
#products-section {
    display: flex;
    justify-content: center;
}

#product-section-content {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 2.5rem;
}
</style>