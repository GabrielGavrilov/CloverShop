<template>
    <div id="product-information">
        <div id="product-image">
            <img v-bind:src="image">
        </div>
        <div id="product-form">
            <div id="product-title">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            </div>
            <div id="product-price">
                <p>$0.00 CAD</p>
            </div>
            <div id="product-divider">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductInformation",
    props: ["image"]
}
</script>

<style scoped>
#product-information {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    flex-wrap: wrap;
}

#product-image {
    width: 500px;
    height: 500px;
    margin-right: 2rem;
}

#product-image > img {
    width: 100%;
    height: 100%;
}

#product-form {
    margin-left: 2rem;
    width: 50%;
    height: relative;
}

#product-title {
    font-size: 1.75rem;
}

#product-price {
    margin-top: .75rem;
    font-size: 1.25rem;
    margin-bottom: 2.5rem;
}

#product-divider {
    width: 100%;
    height: 1px;
    background-color: black;
    opacity: 0.2;
}

</style>