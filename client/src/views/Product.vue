<template>
    <Header/>
    <div id="product">
        <div id="product-info">
            <ProductInformation v-bind:image="require('@/assets/placeholder_small.png')"/>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header.vue"
import ProductInformation from "@/components/ProductImage.vue"

export default {
    name: "Product",
    components: {
        Header,
        ProductInformation
    }
}
</script>

<style scoped>
#product {
    display: flex;
    justify-content: center;
    align-items: center;
}

#product-info {
    width: 90%;
    display: flex;
}
</style>