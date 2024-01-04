<template>
    <div id="product">
        <router-link to="/product" style="color: black; text-decoration: none;">
            <div id="product-image">
                <img v-bind:src="require('@/assets/placeholder_small.png')">
            </div>
            <div id="product-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div id="product-price">
                <p>$0.00</p>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    name: "ProductView"
}
</script>

<style scoped>
#product {
    width: 350px;
    margin-top: 2.5rem;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
}

#product-image {
    width: 350px;
    height: 350px;
}

#product-image > img {
    width: 100%;
    height: 100%;
}

#product-title {
    margin-top: .75rem;
    font-size: 1.2rem;
}

#product-price {
    margin-top: .75rem;
    font-weight: bold;
    font-size: 1.1rem;
}
</style>