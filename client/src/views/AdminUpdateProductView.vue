<template>
    <DashboardHeaderComponent/>
    <p>{{ message }}</p>
    <form v-on:submit.prevent="updateProduct()">
        <input v-model="product.productName" type="text" required>
        <br>
        <input v-model="product.productDescription" type="text" required>
        <br>
        <input v-model="product.productPrice" type="number" required>
        <br>
        <input v-model="product.productQuantity" type="number" required>
        <br>
        <button type="submit">Update</button>
    </form>
</template>

<script>
import DashboardHeaderComponent from '@/components/DashboardHeaderComponent.vue';
import {useRoute, useRouter} from "vue-router"
import { reactive } from 'vue';

export default {
    name: "AdminUpdateProductView.vue",
    components: {
        DashboardHeaderComponent
    },
    data() {
        return {
            message: "",
            route: useRoute(),
            router: useRouter(),
            product: reactive({
                productId: "",
                productName: "",
                productDescription: "",
                productPrice: "",
                productQuantity: ""
            })
        }
    },
    async mounted() {
        await this.authorizeUser()

        const response = await fetch(`http://localhost:3000/api/product/${this.route.params.productId}`, {
            headers: {"Content-Type": "application/json"}
        })

        const productInformation = await response.json();
        this.product.productId = productInformation._id
        this.product.productName = productInformation.productName
        this.product.productDescription = productInformation.productDescription
        this.product.productPrice = productInformation.productPrice
        this.product.productQuantity = productInformation.productQuantity
    },
    methods: {
        async updateProduct() {
            const response = await fetch("http://localhost:3000/admin/product/update", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                credentials: "include",
                body: JSON.stringify(this.product)
            });

            const productResponse = await response.json()

            if(productResponse.status == 409)
                this.message = productResponse.message

            else
                await this.router.push("/admin/products")
        },

        async authorizeUser() {
            const response = await fetch("http://localhost:3000/auth/account", {
                headers: {"Content-Type": "application/json"},
                credentials: "include"
            })

            const authResponse = await response.json()

            if(authResponse.status == 401 || authResponse.status == 400)
                this.router.push("/admin/login")
        }
    }
}
</script>
